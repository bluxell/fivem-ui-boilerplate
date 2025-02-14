import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  publicDir: "./src/public",
  logLevel: "info",
  build: {
    cssMinify: true,
    minify: true,
    sourcemap: false,
    outDir: "build",
  },
});
