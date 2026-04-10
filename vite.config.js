import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'FarmSense',
        short_name: 'FarmSense',
        theme_color: '#1B4332',
        display: 'standalone',
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,jpg,bin,json}'],
        maximumFileSizeToCacheInBytes: 50000000,
      },
    }),
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
