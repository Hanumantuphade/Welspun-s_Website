// app/api/auth/register/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { UserService } from '@/lib/user-service';

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, mobile, location } = await request.json();

    // Validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Name, email, and password are required' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters long' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const emailExists = await UserService.checkEmailExists(email);
    if (emailExists) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      );
    }

    // Create user
    const user = await UserService.createUser({
      name,
      email,
      password,
      mobile,
      location
    });

    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Failed to create account' },
      { status: 500 }
    );
  }
}
