import {getAuth} from "@clerk/nextjs/server";
import authSeller from "@/lib/authSeller";
import {NextResponse} from "next/server";
import connectDB from "@/config/db";
import Product from "@/models/Product";
import {bucket} from "@/firebase/firebaseAdmin"; // <- importamos el bucket configurado
import {v4 as uuid} from "uuid";

export const runtime = "nodejs"; // importante para evitar Edge runtime

export async function POST(request) {
    try {
        const { userId } = getAuth(request);

        const isSeller = await authSeller(request);
        if (!isSeller) {
            return NextResponse.json({ success: false, message: "Not authorized" }, { status: 401 });
        }

        const formData = await request.formData();

        const name = formData.get("name");
        const description = formData.get("description");
        const category = formData.get("category");
        const price = Number(formData.get("price"));
        const offerPrice = Number(formData.get("offerPrice"));
        const files = formData.getAll("images");

        if (!files || files.length === 0) {
            return NextResponse.json({ success: false, message: "No files uploaded" }, { status: 400 });
        }

        // 🔥 Subir imágenes a Firebase Storage
        const imageUrls= await Promise.all(
            files.map(async (file) => {
                const arrayBuffer = await file.arrayBuffer();
                const buffer = Buffer.from(arrayBuffer);

                const safeName = file?.name ?? `image-${uuid()}.jpg`;
                const objectPath = `productos/${Date.now()}-${safeName}`;
                const fileRef = bucket.file(objectPath);

                // Generar un token de descarga único
                const downloadToken = uuid();

                await fileRef.save(buffer, {
                    contentType: file?.type ?? "application/octet-stream",
                    metadata: {
                        metadata: {
                            firebaseStorageDownloadTokens: downloadToken, // Necesario para la URL pública
                        },
                        cacheControl: "public, max-age=31536000",
                    },
                });

                // Construir URL pública tipo "firebasestorage.googleapis.com"
                const bucketName = process.env.FIREBASE_STORAGE_BUCKET;
                const encodedPath = encodeURIComponent(objectPath);
                return `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${encodedPath}?alt=media&token=${downloadToken}`;
            })
        );

        // 💾 Guardar producto en MongoDB
        await connectDB();
        const newProduct = await Product.create({
            userId,
            name,
            description,
            category,
            price,
            offerPrice,
            image: imageUrls, // guardamos las URLs generadas
            date: Date.now(),
        });

        return NextResponse.json({
            success: true,
            message: "Uploaded successfully",
            newProduct,
        });
    } catch (error) {
        console.error("Upload error:", error);
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}
