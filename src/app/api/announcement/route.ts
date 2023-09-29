import { NextResponse } from "next/server";

export async function GET() {
  await new Promise(resolve => setTimeout(resolve, 8000));
  return NextResponse.json({ content: "This is sample announcement" });
}
