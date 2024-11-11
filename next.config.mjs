// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: './',  // Utiliser des chemins relatifs
    basePath: '/next-blog2', // Remplace par le nom de ton dépôt GitHub
    images: {
      unoptimized: true,
    },
  };
  
  export default nextConfig;
  