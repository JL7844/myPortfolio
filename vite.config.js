import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // remove if not using React

export default defineConfig({
  base: '/repo-name/',  // replace repo-name with your GitHub repo
  plugins: [react()]
})
