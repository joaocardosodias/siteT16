/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Configuração para GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/nome-do-seu-repositorio' : '',
  images: {
    unoptimized: true,
  },
  // Desabilitar o uso de trailing slashes
  trailingSlash: false,
}

export default nextConfig
