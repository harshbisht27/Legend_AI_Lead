import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-redirects',
      closeBundle() {
        fs.copyFileSync('public/_redirects', 'dist/_redirects')
      }
    }
  ]
})
