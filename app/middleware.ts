// middleware.ts
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && req.nextUrl.pathname.startsWith("/account")) {
    return NextResponse.redirect(new URL("/(auth)/login", req.url));
  }

  return res;
}

// Appliquer le middleware uniquement à certaines routes
export const config = {
  matcher: ["/account"],
};
