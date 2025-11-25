import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // remove if not using React

export default defineConfig({
  base: '/myPortfolio/',  // <-- Replace with your repo name exactly
  plugins: [react()]
})
