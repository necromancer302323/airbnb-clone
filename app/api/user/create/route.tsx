import { NextRequest, NextResponse } from "next/server"
import client from "@/db"
export async function POST(req:NextRequest){
    const data = await req.json()
    try{
   const res= await client.user.create({
        data:{
            name:data.name,
            email:data.email,
            password:data.password
        },
        select:{
            id:true
        }
    })
    return NextResponse.json({
        message:`user created withi id ${res.id}`
    })

    }catch(err){
        console.log(err)
        return NextResponse.json({
        message:"err occured"
    })
}
}