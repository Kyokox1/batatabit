import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://kyokox1.github.io/batatabit/",
  plugins: [react()]
})
