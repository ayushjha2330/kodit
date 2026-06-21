import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ reply: "Offline client-side assistant active." });
}
