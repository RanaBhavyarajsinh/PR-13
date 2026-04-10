import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'default-url'
  return NextResponse.json({ message: 'Hello from API!', apiUrl })
}