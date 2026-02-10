import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // <--- Changed from /portfolio/ to /Portfolio/ (capital P)
})
