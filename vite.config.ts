import { defineConfig } from "vite";
import path from "path";
import mdPlugin from "./src/md-plugin";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: "src", // This tells Vite to look inside the src folder
  plugins: [
    mdPlugin(),
    tailwindcss(), // Add the Tailwind CSS v4 plugin
  ],
  server: {
    port: 5200, // Unique port for the dev server
    open: true, // Automatically open browser on server start
    hmr: true, // Enable hot module replacement
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Matches the path alias in tsconfig.json
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist"), // Output directory for the built app
    emptyOutDir: true, // Ensures that the build folder is cleared before building
    rollupOptions: {
      input: path.resolve(__dirname, "src/index.html"), // Entry HTML file
    },
    minify: 'terser', // Use terser for better minification
    sourcemap: true, // Generate sourcemaps for debugging
  },
  optimizeDeps: {
    include: [
      '@toast-ui/editor',
      'highlight.js',
      'markdown-it',
      'gray-matter'
    ],
  },
});