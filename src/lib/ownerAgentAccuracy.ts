export type OwnerAgentToolName =
  | "list_products"
  | "get_product"
  | "list_orders"
  | "list_customers"
  | "get_customer"
  | "list_abandoned_carts"
  | "get_workspace_automation_status"
  | "get_store_info";

export type OwnerAgentDomain =
  | "products"
  | "orders"
  | "customers"
  | "abandoned_carts"
  | "automations"
  | "store"
  | "unknown";

export type OwnerAgentIntentKind =
  | "list"
  | "count"
  | "detail"
  | "compare"
  | "exists"
  | "status"
  | "url"
  | "unknown";

export type OwnerAgentEntityType = "product" | "customer" | "order" | "cart";

export type ListedEntity = {
  index?: number;
  id: string;
  type: OwnerAgentEntityType;
  displayName: string;
  aliases?: string[];
  sourceToolCallId?: string;
  confidence?: "exact" | "fuzzy" | "ordinal";
  fields?: Record<string, unknown>;
};

export type PendingEntityTask = {
  type: OwnerAgentEntityType;
  query?: string;
  entityId?: string;
  candidates?: ListedEntity[];
};

export type ConversationEntityState = {
  updatedAt?: string;
  lastProducts?: ListedEntity[];
  lastCustomers?: ListedEntity[];
  lastOrders?: ListedEntity[];
  lastCarts?: ListedEntity[];
  pending?: PendingEntityTask;
};

export type ToolPlanStep = {
  name: OwnerAgentToolName;
  args: Record<string, unknown>;
  reason: string;
};

export type ToolRegistryEntry = {
  name: string;
  kind: "read" | "search" | "detail" | "write" | "send" | "analytics" | "automation";
  domain: OwnerAgentDomain | "other";
  sideEffect: boolean;
  requiresHitl: boolean;
  supportsPagination?: boolean;
  supportsSearch?: boolean;
  returnsTotal?: boolean;
  emptyResultHasFilters?: boolean;
  scopeFields?: string[];
};

export type IntentClassification = {
  domain: OwnerAgentDomain;
  kind: OwnerAgentIntentKind;
  requiresTool: boolean;
  confidence: "high" | "medium" | "low";
  query?: string;
  reference?: ResolvedReference;
  toolPlan: ToolPlanStep[];
};

export type ResolvedReference =
  | { status: "resolved"; entity: ListedEntity; reason: string }
  | { status: "multiple"; candidates: ListedEntity[]; reason: string }
  | { status: "unresolved"; reason: string };

export type ToolEnvelope<T = unknown> = {
  ok: boolean;
  tool_call_id?: string;
  scope?: {
    workspace_id?: string;
    store_id?: string;
    actor_role?: string;
  };
  filters_applied?: Record<string, unknown>;
  pagination?: {
    page?: number;
    per_page?: number;
    total?: number;
    has_more?: boolean;
  };
  data?: T;
  warnings?: string[];
  empty_reason?:
    | "no_records"
    | "no_records_matching_filters"
    | "permission_denied"
    | "upstream_unavailable";
  upstream?: {
    provider?: string;
    endpoint_name?: string;
    status_code?: number;
    latency_ms?: number;
  };
};

export type FinalReplyCandidate = {
  kind: "direct_reply" | "tool_call" | "tool_result_reply";
  text?: string;
  groundingToolCallIds?: string[];
  groundingEnvelopes?: ToolEnvelope[];
};

export type TraceValidationInput = {
  prompt_hash?: string;
  tool_schema_hash?: string;
  policy_version?: string;
  provider?: {
    provider?: string;
    model?: string;
  };
  tools?: {
    called?: Array<{ ok?: boolean; name?: string }>;
    succeeded?: number;
  };
  final_reply?: FinalReplyCandidate;
};

export class AccuracyGuardError extends Error {
  code: string;
  details?: Record<string, unknown>;

  constructor(code: string, message: string, details?: Record<string, unknown>) {
    super(message);
    this.name = "AccuracyGuardError";
    this.code = code;
    this.details = details;
  }
}

const PRODUCT_WORDS = ["منتج", "منتجات", "product", "products"];
const ORDER_WORDS = ["طلب", "طلبات", "order", "orders"];
const CUSTOMER_WORDS = ["عميل", "عملاء", "زبون", "زبائن", "customer", "customers"];
const CART_WORDS = ["سلة", "سلات", "المتروكة", "متروكة", "cart", "carts", "abandoned"];
const AUTOMATION_WORDS = ["اتمتة", "أتمتة", "automation", "automations"];
const STORE_URL_WORDS = ["رابط المتجر", "لينك المتجر", "store url", "store link"];

const COUNT_WORDS = ["كم", "عدد", "count", "how many"];
const LIST_WORDS = ["وريني", "اعرض", "اعرضهم", "عرض", "show", "list"];
const DETAIL_WORDS = ["تفاصيل", "تفصيل", "details", "detail"];
const COMPARE_WORDS = ["الفرق", "ايش الفرق", "إيش الفرق", "قارن", "compare", "بينهم"];
const EXISTS_WORDS = ["عندنا", "فيه", "موجود", "exists"];
const STATUS_WORDS = ["تعمل", "شغالة", "مفعلة", "مفعّل", "status", "working", "enabled"];
const FIRST_REFERENCE_WORDS = ["اول", "أول", "الاول", "الأول", "first"];
const PRONOUN_DETAIL_WORDS = ["تفاصيله", "تفاصيلها", "ورينيه", "اعرضه", "اعرضها", "show him", "show it"];

export function classifyOwnerRequest(
  text: string,
  state: ConversationEntityState = {},
): IntentClassification {
  const normalized = normalizeText(text);
  const domain = detectDomain(normalized, state);
  const kind = detectKind(normalized, domain);
  const query = extractEntityQuery(normalized, domain);
  const reference = resolveEntityReference(normalized, state, domain);
  const toolPlan = buildToolPlan({ normalized, domain, kind, query, reference });

  return {
    domain,
    kind,
    requiresTool: shouldRequireTool(domain, kind),
    confidence: domain === "unknown" || kind === "unknown" ? "low" : "high",
    query,
    reference,
    toolPlan,
  };
}

export function resolveEntityReference(
  normalizedText: string,
  state: ConversationEntityState = {},
  domain: OwnerAgentDomain = detectDomain(normalizedText, state),
): ResolvedReference | undefined {
  const text = normalizeText(normalizedText);

  if (containsAny(text, FIRST_REFERENCE_WORDS) && domain === "products") {
    const first = state.lastProducts?.find((entity) => entity.index === 1) ?? state.lastProducts?.[0];
    return first
      ? { status: "resolved", entity: { ...first, confidence: "ordinal" }, reason: "first_product_reference" }
      : { status: "unresolved", reason: "first_product_without_prior_product_list" };
  }

  if (containsAny(text, PRONOUN_DETAIL_WORDS)) {
    const pending = resolvePendingEntity(state);
    if (pending) return pending;

    const nearest = nearestSingularEntity(state, domain);
    if (nearest) return nearest;

    return { status: "unresolved", reason: "pronoun_without_entity_state" };
  }

  if ((text.includes("منهم") || text.includes("بينهم")) && domain === "products") {
    const products = state.lastProducts ?? [];
    if (products.length > 1) {
      return { status: "multiple", candidates: products, reason: "product_set_reference" };
    }
    if (products.length === 1) {
      return { status: "resolved", entity: products[0], reason: "single_product_set_reference" };
    }
  }

  return undefined;
}

export function guardFinalReply(
  text: string,
  state: ConversationEntityState,
  reply: FinalReplyCandidate,
): FinalReplyCandidate {
  const classification = classifyOwnerRequest(text, state);

  if (classification.requiresTool && reply.kind === "direct_reply" && !hasGrounding(reply)) {
    throw new AccuracyGuardError(
      "owner_store_data_question_without_tool",
      "Owner store-data request cannot be answered as an ungrounded direct reply.",
      { text, classification },
    );
  }

  if (reply.text && hasAbsoluteEmptyClaim(reply.text) && !hasUnfilteredEmptyGrounding(reply)) {
    throw new AccuracyGuardError(
      "absolute_empty_claim_without_unfiltered_grounding",
      "Absolute empty-result claims require a current unfiltered full-scope empty tool result.",
      { text: reply.text, groundingEnvelopes: reply.groundingEnvelopes },
    );
  }

  return reply;
}

export function validateToolEnvelope(envelope: ToolEnvelope): string[] {
  const errors: string[] = [];

  if (typeof envelope.ok !== "boolean") errors.push("missing_ok_boolean");
  if (!envelope.scope?.workspace_id) errors.push("missing_scope_workspace_id");
  if (!envelope.scope?.store_id) errors.push("missing_scope_store_id");
  if (!envelope.scope?.actor_role) errors.push("missing_scope_actor_role");
  if (!envelope.filters_applied) errors.push("missing_filters_applied");

  if (Array.isArray(envelope.data) && !envelope.pagination) {
    errors.push("missing_pagination_for_list_result");
  }

  const dataIsEmptyArray = Array.isArray(envelope.data) && envelope.data.length === 0;
  if (envelope.ok && dataIsEmptyArray && !envelope.empty_reason) {
    errors.push("missing_empty_reason");
  }

  return errors;
}

export function validateToolRegistry(tools: ToolRegistryEntry[]): string[] {
  const errors: string[] = [];
  const seen = new Set<string>();

  for (const tool of tools) {
    if (!tool.name) errors.push("tool_missing_name");
    if (seen.has(tool.name)) errors.push(`duplicate_tool:${tool.name}`);
    seen.add(tool.name);

    if (tool.sideEffect && !tool.requiresHitl) {
      errors.push(`side_effect_tool_without_hitl:${tool.name}`);
    }

    if (tool.kind === "read" || tool.kind === "search" || tool.kind === "detail" || tool.kind === "analytics") {
      const scope = new Set(tool.scopeFields ?? []);
      if (!scope.has("workspace_id")) errors.push(`tool_missing_workspace_scope:${tool.name}`);
      if (!scope.has("store_id")) errors.push(`tool_missing_store_scope:${tool.name}`);
      if (!scope.has("actor_role")) errors.push(`tool_missing_actor_scope:${tool.name}`);
    }

    if ((tool.kind === "read" || tool.kind === "search") && tool.supportsPagination && !tool.returnsTotal) {
      errors.push(`paginated_tool_without_total:${tool.name}`);
    }

    if ((tool.kind === "read" || tool.kind === "search") && !tool.emptyResultHasFilters) {
      errors.push(`read_tool_without_empty_filter_contract:${tool.name}`);
    }
  }

  return errors;
}

export function validateTraceCompleteness(trace: TraceValidationInput): string[] {
  const errors: string[] = [];

  if (!trace.prompt_hash) errors.push("missing_prompt_hash");
  if (!trace.tool_schema_hash) errors.push("missing_tool_schema_hash");
  if (!trace.policy_version) errors.push("missing_policy_version");
  if (!trace.provider?.provider) errors.push("missing_provider");
  if (!trace.provider?.model) errors.push("missing_model");

  const called = trace.tools?.called ?? [];
  const okCount = called.filter((tool) => tool.ok).length;
  if (okCount > 0 && trace.tools?.succeeded !== okCount) {
    errors.push("tool_success_counter_mismatch");
  }

  if (
    trace.final_reply?.kind === "tool_result_reply" &&
    (!trace.final_reply.groundingToolCallIds || trace.final_reply.groundingToolCallIds.length === 0)
  ) {
    errors.push("missing_final_reply_grounding_tool_call_ids");
  }

  return errors;
}

export function transliterationCandidates(query: string): string[] {
  const normalized = normalizeText(query);
  const candidates = new Set<string>([normalized]);

  if (normalized.includes("البشير")) {
    candidates.add("elbasheir");
    candidates.add("albasheir");
    candidates.add("albasheer");
    candidates.add("al bashir");
    candidates.add("al basheer");
  }

  return Array.from(candidates).filter(Boolean);
}

export function updateEntityStateFromToolResult(
  previous: ConversationEntityState,
  toolName: OwnerAgentToolName,
  envelope: ToolEnvelope<unknown>,
): ConversationEntityState {
  const next: ConversationEntityState = { ...previous, updatedAt: new Date().toISOString() };
  const data = envelope.data;

  if (!Array.isArray(data)) return next;

  if (toolName === "list_products") {
    next.lastProducts = data.map((item, index) => toListedEntity(item, "product", index + 1, envelope.tool_call_id));
  }

  if (toolName === "list_customers") {
    next.lastCustomers = data.map((item, index) => toListedEntity(item, "customer", index + 1, envelope.tool_call_id));
  }

  if (toolName === "list_orders") {
    next.lastOrders = data.map((item, index) => toListedEntity(item, "order", index + 1, envelope.tool_call_id));
  }

  if (toolName === "list_abandoned_carts") {
    next.lastCarts = data.map((item, index) => toListedEntity(item, "cart", index + 1, envelope.tool_call_id));
  }

  return next;
}

export function buildSafeToolResultReply(
  toolName: OwnerAgentToolName,
  envelope: ToolEnvelope,
): FinalReplyCandidate {
  const groundingToolCallIds = envelope.tool_call_id ? [envelope.tool_call_id] : [];
  const groundingEnvelopes = [envelope];
  const data = envelope.data;

  if (!envelope.ok) {
    return {
      kind: "tool_result_reply",
      text: "ما قدرت أجيب البيانات الآن. جرّب مرة ثانية أو تحقق من اتصال المتجر.",
      groundingToolCallIds,
      groundingEnvelopes,
    };
  }

  if (Array.isArray(data) && data.length === 0) {
    return {
      kind: "tool_result_reply",
      text: renderEmptyResult(toolName, envelope),
      groundingToolCallIds,
      groundingEnvelopes,
    };
  }

  if (toolName === "list_customers" && Array.isArray(data)) {
    const total = reliableTotal(envelope, data.length);
    const lines = data.slice(0, 20).map((item, index) => {
      const entity = toListedEntity(item, "customer", index + 1, envelope.tool_call_id);
      return `${index + 1}. ${entity.displayName}`;
    });
    return {
      kind: "tool_result_reply",
      text: `👥 ${total} عميل:\n${lines.join("\n")}${renderHasMore(envelope)}`,
      groundingToolCallIds,
      groundingEnvelopes,
    };
  }

  if (toolName === "list_orders" && Array.isArray(data)) {
    const total = reliableTotal(envelope, data.length);
    const lines = data.slice(0, 20).map((item, index) => renderOrderLine(item, index + 1));
    return {
      kind: "tool_result_reply",
      text: `🛒 ${total} طلب:\n${lines.join("\n")}${renderHasMore(envelope)}`,
      groundingToolCallIds,
      groundingEnvelopes,
    };
  }

  if (toolName === "list_abandoned_carts" && Array.isArray(data)) {
    const total = reliableTotal(envelope, data.length);
    const lines = data.slice(0, 20).map((item, index) => renderCartLine(item, index + 1));
    return {
      kind: "tool_result_reply",
      text: `🛒 ${total} سلة متروكة:\n${lines.join("\n")}${renderHasMore(envelope)}`,
      groundingToolCallIds,
      groundingEnvelopes,
    };
  }

  return {
    kind: "tool_result_reply",
    text: "تم جلب البيانات من الأداة. استخدم المعرّفات والحقول الراجعة فقط عند صياغة الرد.",
    groundingToolCallIds,
    groundingEnvelopes,
  };
}

function buildToolPlan(input: {
  normalized: string;
  domain: OwnerAgentDomain;
  kind: OwnerAgentIntentKind;
  query?: string;
  reference?: ResolvedReference;
}): ToolPlanStep[] {
  const { normalized, domain, kind, query, reference } = input;

  if (domain === "products" && kind === "detail") {
    if (reference?.status === "resolved") {
      return [{ name: "get_product", args: { product_id: reference.entity.id }, reason: reference.reason }];
    }

    if (query) {
      return [
        { name: "list_products", args: { query, per_page: 50, include_total: true }, reason: "product_name_search_before_detail" },
      ];
    }
  }

  if (domain === "products" && kind === "compare") {
    const productQuery = query || referenceNameFromState(reference) || extractLooseProductQuery(normalized);
    return [
      {
        name: "list_products",
        args: { query: productQuery, per_page: 50, include_total: true },
        reason: "product_duplicate_comparison_requires_candidate_set",
      },
    ];
  }

  if (domain === "products" && kind === "list") {
    return [{ name: "list_products", args: {}, reason: "owner_requested_product_list" }];
  }

  if (domain === "orders" && kind === "count") {
    return [{ name: "list_orders", args: { include_total: true, limit: 100 }, reason: "owner_requested_order_count" }];
  }

  if (domain === "orders" && (kind === "list" || kind === "detail")) {
    return [{ name: "list_orders", args: { include_total: true, limit: 20 }, reason: "owner_requested_orders" }];
  }

  if (domain === "customers" && kind === "count") {
    return [
      {
        name: "list_customers",
        args: { include_total: true, limit: 100, include_inactive: true, include_guests: true },
        reason: "owner_requested_customer_count",
      },
    ];
  }

  if (domain === "customers" && kind === "detail" && reference?.status === "resolved") {
    return [{ name: "get_customer", args: { customer_id: reference.entity.id }, reason: reference.reason }];
  }

  if (domain === "customers" && kind === "detail" && reference?.status === "multiple") {
    return reference.candidates.map((candidate) => ({
      name: "get_customer",
      args: { customer_id: candidate.id },
      reason: "detail_for_each_pending_customer_candidate",
    }));
  }

  if (domain === "customers" && kind === "detail" && !query) {
    const pendingQuery = extractPendingQueryReference(input.normalized);
    if (pendingQuery) {
      return transliterationCandidates(pendingQuery).map((candidate) => ({
        name: "list_customers",
        args: { query: candidate, limit: 20, include_total: true, include_inactive: true, include_guests: true },
        reason: "pending_customer_name_search_before_detail",
      }));
    }
  }

  if (domain === "customers" && (kind === "exists" || kind === "detail") && query) {
    return transliterationCandidates(query).map((candidate) => ({
      name: "list_customers",
      args: { query: candidate, limit: 20, include_total: true, include_inactive: true, include_guests: true },
      reason: "customer_name_search",
    }));
  }

  if (domain === "customers" && kind === "list") {
    return [
      {
        name: "list_customers",
        args: { limit: 100, include_total: true, include_inactive: true, include_guests: true },
        reason: "owner_requested_customer_list",
      },
    ];
  }

  if (domain === "abandoned_carts") {
    return [
      {
        name: "list_abandoned_carts",
        args: {
          scope: "ui_default",
          include_old: true,
          include_all_statuses: true,
          recoverable_only: false,
          include_total: true,
          limit: 100,
        },
        reason: "owner_requested_store_abandoned_carts",
      },
    ];
  }

  if (domain === "automations") {
    return [
      {
        name: "get_workspace_automation_status",
        args: { automation_key: "abandoned_cart_recovery" },
        reason: "owner_requested_abandoned_cart_automation_status",
      },
    ];
  }

  if (domain === "store" && kind === "url") {
    return [{ name: "get_store_info", args: {}, reason: "owner_requested_store_url" }];
  }

  return [];
}

function detectDomain(normalized: string, state: ConversationEntityState): OwnerAgentDomain {
  if (containsAny(normalized, STORE_URL_WORDS)) return "store";
  if (containsAny(normalized, AUTOMATION_WORDS)) return "automations";
  if (containsAny(normalized, CART_WORDS)) return "abandoned_carts";
  if (containsAny(normalized, PRODUCT_WORDS)) return "products";
  if (containsAny(normalized, ORDER_WORDS)) return "orders";
  if (containsAny(normalized, CUSTOMER_WORDS)) return "customers";
  if (/^.+?\s+(?:اسمه|اسمها)$/.test(normalized)) return "customers";

  if (containsAny(normalized, COMPARE_WORDS) && state.lastProducts?.length) return "products";
  if (containsAny(normalized, FIRST_REFERENCE_WORDS) && state.lastProducts?.length) return "products";
  if (containsAny(normalized, PRONOUN_DETAIL_WORDS) && state.pending?.type === "customer") return "customers";
  if (containsAny(normalized, PRONOUN_DETAIL_WORDS) && state.pending?.type === "product") return "products";
  if (containsAny(normalized, PRONOUN_DETAIL_WORDS) && state.lastCustomers?.length === 1) return "customers";
  if (containsAny(normalized, PRONOUN_DETAIL_WORDS) && state.lastProducts?.length === 1) return "products";
  if (normalized === "الكل" || normalized === "اعرضهم") {
    if (state.pending?.type === "customer") return "customers";
    if (state.lastCustomers?.length) return "customers";
  }

  return "unknown";
}

function detectKind(normalized: string, domain: OwnerAgentDomain): OwnerAgentIntentKind {
  if (domain === "store" && containsAny(normalized, STORE_URL_WORDS)) return "url";
  if (domain === "automations" && containsAny(normalized, STATUS_WORDS)) return "status";
  if (normalized === "اعرضهم" && domain === "customers") return "detail";
  if (domain === "customers" && /^.+?\s+(?:اسمه|اسمها)$/.test(normalized)) return "exists";
  if (containsAny(normalized, COMPARE_WORDS)) return "compare";
  if (containsAny(normalized, DETAIL_WORDS) || containsAny(normalized, PRONOUN_DETAIL_WORDS)) return "detail";
  if (containsAny(normalized, COUNT_WORDS)) return "count";
  if (containsAny(normalized, EXISTS_WORDS)) return "exists";
  if (containsAny(normalized, LIST_WORDS) || normalized === "الكل" || normalized === "اعرضهم") return "list";
  if (domain === "abandoned_carts") return "list";

  return "unknown";
}

function shouldRequireTool(domain: OwnerAgentDomain, kind: OwnerAgentIntentKind): boolean {
  return domain !== "unknown" && kind !== "unknown";
}

function extractEntityQuery(normalized: string, domain: OwnerAgentDomain): string | undefined {
  if (domain === "customers") {
    const named = normalized.match(/(?:عميل|العميل|زبون|الزبون)\s+(?:اسمه|اسمها|باسم)\s+(.+)$/);
    if (named?.[1]) return cleanupQuery(named[1]);

    const suffixName = normalized.match(/^(.+?)\s+(?:اسمه|اسمها)$/);
    if (suffixName?.[1]) return cleanupQuery(suffixName[1]);
  }

  if (domain === "products") {
    const product = normalized.match(/(?:منتج|المنتج)\s+(.+)$/);
    if (product?.[1] && !containsAny(product[1], FIRST_REFERENCE_WORDS)) return cleanupQuery(product[1]);
  }

  return undefined;
}

function extractPendingQueryReference(normalized: string): string | undefined {
  const suffixName = normalized.match(/^(.+?)\s+(?:اسمه|اسمها)$/);
  return suffixName?.[1] ? cleanupQuery(suffixName[1]) : undefined;
}

function extractLooseProductQuery(normalized: string): string | undefined {
  if (normalized.includes("كوب")) return "كوب";
  return undefined;
}

function resolvePendingEntity(state: ConversationEntityState): ResolvedReference | undefined {
  const pending = state.pending;
  if (!pending) return undefined;

  if (pending.entityId) {
    const entity = allEntities(state).find((candidate) => candidate.id === pending.entityId);
    if (entity) return { status: "resolved", entity, reason: "pending_entity_id" };
  }

  if (pending.candidates?.length === 1) {
    return { status: "resolved", entity: pending.candidates[0], reason: "single_pending_candidate" };
  }

  if (pending.candidates && pending.candidates.length > 1) {
    return { status: "multiple", candidates: pending.candidates, reason: "multiple_pending_candidates" };
  }

  return undefined;
}

function nearestSingularEntity(
  state: ConversationEntityState,
  domain: OwnerAgentDomain,
): ResolvedReference | undefined {
  const map: Record<OwnerAgentDomain, ListedEntity[] | undefined> = {
    products: state.lastProducts,
    customers: state.lastCustomers,
    orders: state.lastOrders,
    abandoned_carts: state.lastCarts,
    automations: undefined,
    store: undefined,
    unknown: undefined,
  };
  const entities = map[domain];

  if (entities?.length === 1) {
    return { status: "resolved", entity: entities[0], reason: "nearest_singular_entity" };
  }

  return undefined;
}

function allEntities(state: ConversationEntityState): ListedEntity[] {
  return [
    ...(state.lastProducts ?? []),
    ...(state.lastCustomers ?? []),
    ...(state.lastOrders ?? []),
    ...(state.lastCarts ?? []),
  ];
}

function toListedEntity(
  item: unknown,
  type: OwnerAgentEntityType,
  index: number,
  sourceToolCallId?: string,
): ListedEntity {
  const record = isRecord(item) ? item : {};
  const id = String(record.id ?? record.customer_id ?? record.product_id ?? record.order_id ?? record.cart_id ?? index);
  const displayName = String(record.name ?? record.display_name ?? record.customer_name ?? record.title ?? record.id ?? id);

  return {
    index,
    id,
    type,
    displayName,
    aliases: [displayName],
    sourceToolCallId,
    confidence: "exact",
    fields: record,
  };
}

function referenceNameFromState(reference?: ResolvedReference): string | undefined {
  if (reference?.status === "resolved") return reference.entity.displayName;
  if (reference?.status === "multiple") return reference.candidates[0]?.displayName;
  return undefined;
}

function hasGrounding(reply: FinalReplyCandidate): boolean {
  return Boolean(reply.groundingToolCallIds?.length);
}

function hasUnfilteredEmptyGrounding(reply: FinalReplyCandidate): boolean {
  const envelopes = reply.groundingEnvelopes ?? [];
  return envelopes.some((envelope) => {
    const empty = Array.isArray(envelope.data) && envelope.data.length === 0;
    if (!empty || !envelope.ok) return false;
    if (envelope.pagination?.has_more) return false;
    const filters = envelope.filters_applied ?? {};
    const hasRestrictiveFilter = Object.entries(filters).some(([, value]) => {
      if (value === undefined || value === null || value === false) return false;
      if (typeof value === "string" && value.trim() === "") return false;
      return true;
    });
    return !hasRestrictiveFilter;
  });
}

function hasAbsoluteEmptyClaim(text: string): boolean {
  const normalized = normalizeText(text);
  return (
    normalized.includes("لا توجد") ||
    normalized.includes("ما فيه") ||
    normalized.includes("غير موجود") ||
    normalized.includes("no abandoned") ||
    normalized.includes("no customers")
  );
}

function normalizeText(text: string): string {
  return text
    .trim()
    .replace(/[إأآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/\s+/g, " ")
    .toLowerCase();
}

function cleanupQuery(query: string): string {
  return query
    .replace(/[؟?!.،,]+$/g, "")
    .replace(/\b(صح|طيب|لو سمحت|please)\b/g, "")
    .trim();
}

function containsAny(text: string, words: string[]): boolean {
  return words.some((word) => text.includes(normalizeText(word)));
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function renderEmptyResult(toolName: OwnerAgentToolName, envelope: ToolEnvelope): string {
  const filters = envelope.filters_applied ?? {};
  const hasFilters = Object.keys(filters).some((key) => {
    const value = filters[key];
    return value !== undefined && value !== null && value !== false && value !== "";
  });
  const scope = hasFilters ? ` ضمن الفلتر الحالي: ${formatFilters(filters)}` : "";

  if (toolName === "list_abandoned_carts") return `ما لقيت سلات متروكة${scope}.`;
  if (toolName === "list_customers") return `ما لقيت عملاء${scope}.`;
  if (toolName === "list_products") return `ما لقيت منتجات${scope}.`;
  if (toolName === "list_orders") return `ما لقيت طلبات${scope}.`;

  return `ما لقيت نتائج${scope}.`;
}

function reliableTotal(envelope: ToolEnvelope, fallbackLength: number): number | string {
  if (typeof envelope.pagination?.total === "number") return envelope.pagination.total;
  if (envelope.pagination?.has_more) return `${fallbackLength}+`;
  return fallbackLength;
}

function renderHasMore(envelope: ToolEnvelope): string {
  return envelope.pagination?.has_more ? "\n... توجد نتائج إضافية، أقدر أجلب الصفحة التالية." : "";
}

function renderOrderLine(item: unknown, index: number): string {
  const record = isRecord(item) ? item : {};
  const id = String(record.id ?? record.order_id ?? record.reference ?? index);
  const status = String(record.status ?? record.status_name ?? "غير محدد");
  const total = formatMoney(record.total ?? record.amount ?? record.price);
  const date = record.date ?? record.created_at;
  return `${index}. #${id} — ${status}${total ? ` | ${total}` : ""}${date ? ` | ${date}` : ""}`;
}

function renderCartLine(item: unknown, index: number): string {
  const record = isRecord(item) ? item : {};
  const customer = String(record.customer_name ?? record.customer ?? record.name ?? "عميل غير محدد");
  const amount = formatMoney(record.amount ?? record.total ?? record.price);
  const status = record.status ? ` | ${record.status}` : "";
  const age = record.age_label ?? record.created_at;
  return `${index}. ${customer}${amount ? ` — ${amount}` : ""}${status}${age ? ` | ${age}` : ""}`;
}

function formatMoney(value: unknown): string {
  if (value === undefined || value === null || value === "") return "";
  if (typeof value === "number") return `${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ريال`;
  const text = String(value).trim();
  if (!text) return "";
  return text.includes("ريال") || text.includes("ر.س") ? text : `${text} ريال`;
}

function formatFilters(filters: Record<string, unknown>): string {
  const rendered = Object.entries(filters)
    .filter(([, value]) => value !== undefined && value !== null && value !== false && value !== "")
    .map(([key, value]) => `${key}=${String(value)}`);
  return rendered.length ? rendered.join(", ") : "بدون فلتر";
}
