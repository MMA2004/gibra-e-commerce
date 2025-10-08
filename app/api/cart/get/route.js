import {getAuth} from "@clerk/nextjs/server";
import connectDB from "@/config/db";
import User from "@/models/User";
import {NextResponse} from "next/server";


export async function GET(request) {

    try {

        const { userId } = await getAuth(request);

        await connectDB()

        const user = await User.findById(userId);

        const { cartItems } = user

        return NextResponse.json({success: true, cartItems: cartItems})

    } catch (error) {
        NextResponse.json({success: false, message: error.message});
    }
}