import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin']
      }
    })
  ],
  server: {
    port: 5173,
    host: true,
    strictPort: true
  },
  preview: {
    port: 5173,
    host: true,
    strictPort: true
  }
})