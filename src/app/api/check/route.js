import { NextResponse } from "next/server"


export const GET = async() =>{
    const envData = process.env.DB_NAME
    console.log(envData);
    if(!envData){
        return NextResponse.json({success:false,message: 'data is Not Coming'});
    }
    return NextResponse.json({success: true, message: envData});
}