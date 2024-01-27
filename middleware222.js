// import { match } from "@formatjs/intl-localematcher";
// import Negotiator from "negotiator";
// import { NextResponse } from "next/server";

// export { default } from "next-auth/middleware";

// let locales = ["en", "de"];
// let defaultLocale = "en";

// function getLocale(request) {
//   let headers = { "accept-language": "en" };
//   let languages = new Negotiator({ headers }).languages();
//   return match(languages, locales, defaultLocale); // -> 'en'
// }

// export function middleware(request) {
//   // Check if there is any supported locale in the pathname
//   const { pathname } = request.nextUrl;
//   const isPathAllowed = ["/img", "img", "/api"].some((allowedPath) =>
//     pathname.startsWith(`${allowedPath}`)
//   );
//   if (isPathAllowed) return;
//   const pathnameHasLocale = locales.some(
//     (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
//   );

//   if (pathnameHasLocale) return;

//   // Redirect if there is no locale
//   const locale = defaultLocale;
//   request.nextUrl.pathname = `/${locale}${pathname}`;
//   // e.g. incoming request is /products
//   // The new URL is now /en-US/products
//   return Response.redirect(request.nextUrl);
// }

// export const config = {
//   matcher: [
//     // Skip all internal paths (_next)
//     "/:locale/login",
//     "/:locale/",
//     // Optional: only run on root (/) URL
//     // '/'
//   ],
// };
