import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    // Remove historyApiFallback as it's not a valid option in Vite
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [
    {
      name: 'handle-html5-routing',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // Handle /studio route specifically
          if (req.url === '/studio') {
            req.url = '/'; // Rewrite to index.html
          }
          next();
        });
      },
    },
  ],
});
