import { defineConfig } from "vite";
import path from "path";
import mdPlugin from "./src/md-plugin";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: "src",
  plugins: [mdPlugin(), tailwindcss()],
  server: { port: 5200 },
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "src/index.html"),
    },
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
});
