export const dynamic = "force-dynamic";

import { getAuth } from "@clerk/nextjs/server";
import connectDB from "@/config/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { userId } = getAuth(request);
        const body = await request.json();

        // Forzar a string siempre
        const productId = String(body.productId);

        console.log("productId:", productId, typeof productId);

        await connectDB();
        const user = await User.findById(userId);

        if (!user) {
            return NextResponse.json({ success: false, message: "User not found" });
        }

        if (!Array.isArray(user.favorites)) {
            user.favorites = [];
        }

        const index = user.favorites.indexOf(productId);

        if (index > -1) {
            user.favorites.splice(index, 1);
        } else {
            user.favorites.push(productId);
        }

        user.markModified("favorites");
        const saved = await user.save();

        console.log("Guardado:", saved);

        return NextResponse.json({ success: true, favorites: saved.favorites });

    } catch (error) {
        return NextResponse.json({ success: false, message: error.message });
    }
}


