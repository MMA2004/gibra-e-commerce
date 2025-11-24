/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            // Cloudinary
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',
            },
            // GitHub raw assets
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                pathname: '**',
            },
            // Firebase Storage (para tus imágenes subidas)
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
                pathname: '**',
            },
            // Opcional: si usas archivos públicos del bucket
            {
                protocol: 'https',
                hostname: 'storage.googleapis.com',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;

