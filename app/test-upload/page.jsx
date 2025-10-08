'use client'
import { useState } from "react";

export default function TestUpload() {
    const [message, setMessage] = useState("");
    const [urls, setUrls] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", "Test product");
        formData.append("description", "Subida de prueba desde el frontend");
        formData.append("category", "testing");
        formData.append("price", "100");
        formData.append("offerPrice", "80");
        formData.append("images", e.target.file.files[0]); // solo 1 imagen

        try {
            const res = await fetch("/api/product/add", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            console.log("Response:", data);

            if (data.success) {
                setMessage("✅ Imagen subida correctamente");
                setUrls(data.newProduct.image);
            } else {
                setMessage(`❌ Error: ${data.message}`);
            }
        } catch (err) {
            console.error(err);
            setMessage("❌ Error al enviar la solicitud");
        }
    };

    return (
        <div style={{ padding: 30 }}>
            <h2>🧪 Test subida de imagen a Firebase</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" name="file" accept="image/*" />
                <button type="submit">Subir</button>
            </form>

            <p>{message}</p>

            {urls.length > 0 && (
                <div>
                    <h3>📸 URLs generadas:</h3>
                    <ul>
                        {urls.map((u, i) => (
                            <li key={i}>
                                <a href={u} target="_blank" rel="noopener noreferrer">{u}</a>
                            </li>
                        ))}
                    </ul>
                    <img src={urls[0]} width="250"  alt={}/>
                </div>
            )}
        </div>
    );
}
