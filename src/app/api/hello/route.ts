import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "안녕하세요, Next.js API 라우트입니다!" });
}
