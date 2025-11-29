import { getAuth } from "@clerk/nextjs/server";
import connectDB from "@/config/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { userId } = getAuth(request);
        const body = await request.json();

        const productId = String(body.productId);

        await connectDB();
        const user = await User.findById(userId);

        const index = user.favorites.indexOf(productId);

        if (index > -1) {
            user.favorites.splice(index, 1);
        } else {
            user.favorites.push(productId);
        }

        user.save();

        return NextResponse.json({ success: true, favorites: user.favorites });

    } catch (error) {
        return NextResponse.json({ success: false, message: error.message });
    }
}


