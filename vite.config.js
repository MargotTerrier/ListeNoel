import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ListeNoel/',  // <--- IMPORTANT: juste le nom du repo entre '/'
})
