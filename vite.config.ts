import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

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
          if (id.includes("node_modules")) {
            if (
              id.includes("/react/") ||
              id.includes("/react-dom/") ||
              id.match(/node_modules[\\/]react[\\/]/) ||
              id.match(/node_modules[\\/]react-dom[\\/]/)
            ) {
              return "vendor_react";
            }
            if (
              id.includes("/@radix-ui/") ||
              id.includes("/shadcn/") ||
              id.includes("/@shadcn/")
            ) {
              return "vendor_ui";
            }
            return "vendor_other";
          }
        },
      },
    },
  },
});
