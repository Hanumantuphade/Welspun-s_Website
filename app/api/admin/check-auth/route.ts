// app/api/admin/check-auth/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const adminSession = request.cookies.get('admin-session')?.value;

  if (!adminSession) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  // Decode and check if session is still valid (1 hour)
  try {
    const decoded = Buffer.from(adminSession, 'base64').toString();
    const [userId, timestamp] = decoded.split('-');
    
    const now = Date.now();
    const sessionTime = parseInt(timestamp);
    const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds

    if (now - sessionTime > oneHour) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    return NextResponse.json({ authenticated: true });
  } catch (error) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
