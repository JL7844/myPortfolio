import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // if using React

export default defineConfig({
  base: '/repo-name/',   // <--- replace with your GitHub repo name
  plugins: [react()]
})
