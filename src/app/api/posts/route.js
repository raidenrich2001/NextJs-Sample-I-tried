import { NextResponse } from "next/server"
import connect from "@component/utils/db"
import Post from "@component/models/Post";
import User from "@component/models/User";

export const GET = async ( request ) => {
    try{
        await connect();
        const post = await Post.find()
        return new NextResponse(JSON.stringify(post), { status : 200 })
    }
    catch(err) {
        return new NextResponse(err, { status : 500 })
    }
}