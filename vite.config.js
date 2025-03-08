import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',  // ✅ Asegura que las rutas sean correctas en producción
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: []
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',  // ✅ Agrega un hash único a los archivos JS
        chunkFileNames: 'assets/[name]-[hash].js',  // ✅ Asegura que los chunks tengan un hash
        assetFileNames: 'assets/[name]-[hash][extname]'  // ✅ Evita servir archivos antiguos en caché
      }
    }
  }
})
