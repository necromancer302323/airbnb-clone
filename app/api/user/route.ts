import { NextRequest, NextResponse } from "next/server"
import client from "@/db"
export async function POST(req:NextRequest){
    const data = await req.json()
    try{
   const res= await client.user.findFirst({
        where:{
            email:data.email,
        }
    })
    return NextResponse.json({
        message:res
    })

    }catch(err){
        console.log(err)
        return NextResponse.json({
        message:"err occured"
    })
}
}