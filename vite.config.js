import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api/weather': {
        // Forward API calls from Vite dev server to local serverless runtime (e.g. `vercel dev`)
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
})
