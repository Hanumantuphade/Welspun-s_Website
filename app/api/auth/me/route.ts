// app/api/auth/me/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getUserIdFromCookie } from '@/lib/auth-middleware';
import { UserService } from '@/lib/user-service';

export async function GET(request: NextRequest) {
  try {
    const userId = getUserIdFromCookie(request);

    if (!userId) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const user = await UserService.getUserById(userId);

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error('Get user error:', error);
    return NextResponse.json(
      { error: 'Failed to get user' },
      { status: 500 }
    );
  }
}
