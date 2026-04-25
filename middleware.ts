import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALE_COOKIE = "preferred_locale";

type Locale = "en" | "pt-BR";

function getLocaleFromAcceptLanguage(header: string | null): Locale {
  if (!header) return "en";

  const normalized = header.toLowerCase();
  if (normalized.includes("pt-br") || normalized.includes("pt")) {
    return "pt-BR";
  }

  return "en";
}

function sanitizeLocale(value: string | null): Locale | null {
  if (value === "en" || value === "pt-BR") return value;
  return null;
}

export function middleware(request: NextRequest) {
  const { nextUrl, cookies, headers } = request;
  const { pathname, searchParams } = nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname === "/favicon.ico") {
    return NextResponse.next();
  }

  const explicitLang = sanitizeLocale(searchParams.get("lang"));
  if (explicitLang) {
    const cleanUrl = nextUrl.clone();
    cleanUrl.searchParams.delete("lang");

    const response = NextResponse.redirect(cleanUrl);
    response.cookies.set(LOCALE_COOKIE, explicitLang, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  if (pathname === "/pt-br") {
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE, "pt-BR", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  if (pathname === "/") {
    const cookieLocale = sanitizeLocale(cookies.get(LOCALE_COOKIE)?.value ?? null);
    const preferredLocale = cookieLocale ?? getLocaleFromAcceptLanguage(headers.get("accept-language"));

    if (preferredLocale === "pt-BR") {
      const ptUrl = nextUrl.clone();
      ptUrl.pathname = "/pt-br";
      return NextResponse.redirect(ptUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.*\\..*).*)"],
};
