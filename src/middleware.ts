import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match everything except api/_next/_vercel and static assets
    "/((?!api|_next|_vercel|demo|banners|.*\\..*).*)",
  ],
};
