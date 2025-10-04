import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  build: {
    // Increase chunk warning limit to 2048 KB (2 MB)
    chunkSizeWarningLimit: 2048,
  },
  base: '/',
})
