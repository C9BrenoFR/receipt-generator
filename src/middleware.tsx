import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    if (request.nextUrl.pathname.startsWith('/auth')) {
        if (!token) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }

    


    return NextResponse.next();
}