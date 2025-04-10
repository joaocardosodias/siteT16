/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Remova o basePath para simplificar
  // basePath: process.env.NODE_ENV === 'production' ? '/nome-do-seu-repositorio' : '',
  images: {
    unoptimized: true,
  },
  // Configurar para gerar arquivos HTML para cada rota
  trailingSlash: true,
}

export default nextConfig
