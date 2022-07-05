import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import markdown, { Mode } from 'vite-plugin-markdown'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), markdown({mode: [Mode.HTML]})]
})
