/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Configuração para GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/siteT16' : '',
  images: {
    unoptimized: true,
  },
  // Desabilitar o uso de trailing slashes
  trailingSlash: false,
  // Não gerar o arquivo index.html automaticamente, usar o nosso personalizado
  // Remova esta linha se quiser que o Next.js gere o index.html
  // skipTrailingSlashRedirect: true,
}

export default nextConfig
