const nextConfig = {
  output: 'out',
  basePath: '/repo-teste-next-gh-pages', // Substitua pelo nome do repositório no GitHub
  trailingSlash: true, // Adiciona barra no final das URLs para melhor compatibilidade
  assetPrefix: '/repo-teste-next-gh-pages/', // Garante o uso correto dos caminhos estáticos
  
};

module.exports = nextConfig;