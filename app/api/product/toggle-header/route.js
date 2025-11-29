import { getAuth } from "@clerk/nextjs/server";
import authSeller from "@/lib/authSeller";
import { NextResponse } from "next/server";
import Product from "@/models/Product";
import connectDB from "@/config/db";

export async function POST(request) {
    try {
        const { userId } = getAuth(request);
        const isSeller = await authSeller(userId);

        if (!isSeller) {
            return NextResponse.json({ success: false, message: "Not authorized" });
        }

        const { productId } = await request.json();

        await connectDB();

        const product = await Product.findById(productId);

        if (!product) {
            return NextResponse.json({ success: false, message: "Product not found" });
        }

        product.isHeader = !product.isHeader;
        await product.save();

        return NextResponse.json({ success: true, message: "Product updated", isHeader: product.isHeader });

    } catch (error) {
        return NextResponse.json({ success: false, message: error.message });
    }
}
