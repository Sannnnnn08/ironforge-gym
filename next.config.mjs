/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // TODO: cuando conectes un CMS/almacenamiento real (Supabase Storage, Cloudinary, etc.)
    // agrega aquí los dominios remotos permitidos para next/image.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" }
    ]
  }
};

export default nextConfig;
