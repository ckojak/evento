import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // ADICIONADO: Configuração de Build para otimizar o tamanho dos chunks
  build: {
    chunkSizeWarningLimit: 1600, // Aumenta o limite de aviso para 1.6MB
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Esta lógica separa as bibliotecas do node_modules em chunks menores
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
});
