/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Remova o basePath para simplificar
  // basePath: process.env.NODE_ENV === 'production' ? '/siteT16' : '',
  images: {
    unoptimized: true,
  },
  // Configurar para gerar arquivos HTML para cada rota
  trailingSlash: true,
}

export default nextConfig
