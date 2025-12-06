import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// Pre-compile regex patterns for better performance during chunking
const REACT_REGEX = /node_modules[\\/]react[\\/]/;
const REACT_DOM_REGEX = /node_modules[\\/]react-dom[\\/]/;
const RADIX_UI_REGEX = /node_modules[\\/]@radix-ui[\\/]/;
const SHADCN_REGEX = /node_modules[\\/]@shadcn[\\/]/;
const NODE_MODULES_REGEX = /node_modules[\\/]/;

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    visualizer({
      filename: "dist/stats.html",
      gzipSize: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (REACT_REGEX.test(id) || REACT_DOM_REGEX.test(id)) {
            return "vendor_react";
          }
          if (RADIX_UI_REGEX.test(id) || SHADCN_REGEX.test(id)) {
            return "vendor_ui";
          }
          if (NODE_MODULES_REGEX.test(id)) {
            return "vendor_other";
          }
        },
      },
    },
  },
});
