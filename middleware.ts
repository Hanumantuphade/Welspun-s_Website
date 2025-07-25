// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Protect admin routes
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const adminSession = request.cookies.get('admin-session')?.value

    if (!adminSession) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    // Check if session is still valid (1 hour)
    try {
      const decoded = Buffer.from(adminSession, 'base64').toString()
      const [userId, timestamp] = decoded.split('-')
      
      const now = Date.now()
      const sessionTime = parseInt(timestamp)
      const oneHour = 60 * 60 * 1000 // 1 hour in milliseconds

      if (now - sessionTime > oneHour) {
        const response = NextResponse.redirect(new URL('/admin/login', request.url))
        response.cookies.delete('admin-session')
        return response
      }
    } catch (error) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
}
