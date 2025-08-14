import client from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const res = await client.rooms.findFirst({
    where: {
      name: data.name,
    },
  });

  return NextResponse.json({
    message: res,
  });
}


