import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: '/cerejeira/', // <- nome exato do repositório no GitHub
  plugins: [react()],
})
