import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    cors: true,
    proxy: {}
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Use absolute paths for production on GoDaddy
  base: mode === 'production' ? '/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Increase assets inline limit to ensure proper bundling
    assetsInlineLimit: 4096,
    // Generate manifest for better caching
    manifest: true,
    // Minify output
    minify: 'terser',
    // Generate source maps
    sourcemap: true,
    rollupOptions: {
      output: {
        // Use consistent naming for assets
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
        },
      },
    },
  },
  preview: {
    port: 8080,
    strictPort: true,
  },
}));
