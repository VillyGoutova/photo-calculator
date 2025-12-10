import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for static deployment - use './' for relative paths (works on any server)
  base: './',
  build: {
    // Output directory
    outDir: 'dist',
    // Generate source maps for production (set to false to disable)
    sourcemap: false,
    // Minify output
    minify: 'esbuild',
    // Chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Copy public assets
    copyPublicDir: true,
    // Ensure all assets use relative paths
    assetsDir: 'assets',
    // Rollup options for better static output
    rollupOptions: {
      output: {
        // Ensure consistent asset naming
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
  server: {
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'X-XSS-Protection': '1; mode=block',
      // Note: CSP should be configured at web server level for production
      // This is a basic CSP for development
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://use.fontawesome.com; font-src 'self' https://use.fontawesome.com; img-src 'self' data:; connect-src 'self';",
    },
  },
})




