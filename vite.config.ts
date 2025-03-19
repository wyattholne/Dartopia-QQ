import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig({
  server: {
    port: 5173, // Use default Vite port instead of 8080
    proxy: {
      '/video_feed': {
        target: 'ws://localhost:5000',
        ws: true,
      },
      '/health': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
