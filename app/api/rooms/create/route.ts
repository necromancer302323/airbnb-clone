import client from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(data.id);
  try {
    const roomId = await client.rooms.create({
      data: {
        name: data.name,
        location: data.location,
        price: data.price,
        images:data.images,
        user: {
          connect: {
            id: data.id,
          },
        },
      },
      select: {
        id: true,
      },
    });
    
    return NextResponse.json({
      message: "room created",
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      message: "err occured",
    });
  }
}