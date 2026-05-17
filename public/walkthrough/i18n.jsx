// i18n.jsx — locale plumbing for the Wosool walkthrough.
//
// Loaded BEFORE all other scripts in index.html. Other files extend
// window.STRINGS with their own namespaced keys and call t(key) to read
// the active-locale value.
//
// Locale comes from ?locale=en|ar on the URL. Default: ar.
//
// Usage in other files:
//   Object.assign(STRINGS.ar, { wa_hello: "مرحبا" });
//   Object.assign(STRINGS.en, { wa_hello: "Hello" });
//   <div>{t("wa_hello")}</div>
//
// Helpers also exposed:
//   toLocaleDigits(n)  → "٠١" (ar) | "01" (en)
//   currency(n)        → "١٢٫٥٠ ر.س" (ar) | "12.50 SAR" (en)

(function () {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("locale");
  const locale = requested === "en" ? "en" : "ar";

  window.__LOCALE__ = locale;
  document.documentElement.lang = locale;
  document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";

  // Each content file extends these via Object.assign(STRINGS.ar, {...}).
  // Keys SHOULD be namespaced with a short prefix (sf_, wa_, sc_, pr_, app_)
  // to avoid collisions.
  window.STRINGS = { ar: {}, en: {} };

  window.t = function (key) {
    const ar = window.STRINGS.ar;
    const dict = locale === "en" ? window.STRINGS.en : ar;
    if (Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
    if (Object.prototype.hasOwnProperty.call(ar, key)) return ar[key];
    return key;
  };

  const arDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

  window.toLocaleDigits = function (input) {
    const s = String(input);
    if (locale === "en") {
      return s.replace(/[٠-٩]/g, (d) => arDigits.indexOf(d).toString());
    }
    return s.replace(/[0-9]/g, (d) => arDigits[parseInt(d, 10)]);
  };

  window.currency = function (amount) {
    const formatted = window.toLocaleDigits(amount);
    return locale === "en" ? `${formatted} SAR` : `${formatted} ر.س`;
  };
})();
