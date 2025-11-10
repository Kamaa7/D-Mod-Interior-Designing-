import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: false,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Better code splitting - React must load first!
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Don't split React - keep it in main bundle to ensure it loads first
          // This prevents "Cannot read properties of undefined (reading 'createContext')" errors
          if (id.includes('node_modules')) {
            // Keep React in main bundle - DO NOT split it
            if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler')) {
              // Return undefined to keep in main bundle
              return;
            }
            // React Router - can be separate
            if (id.includes('react-router')) {
              return 'router-vendor';
            }
            // UI libraries that depend on React
            if (id.includes('@radix-ui') || id.includes('lucide-react')) {
              return 'ui-vendor';
            }
            return 'vendor';
          }
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    // Minify with esbuild (faster and built-in)
    minify: 'esbuild',
    // ESBuild options
    target: 'esnext',
    // CSS code splitting
    cssCodeSplit: true,
    // Asset inlining threshold (4kb)
    assetsInlineLimit: 4096,
    // Common chunk strategy - ensure React loads first
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lucide-react',
    ],
  },
}));
