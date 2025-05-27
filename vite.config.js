import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: './', // ← חשוב! כדי שהכל יעבוד נכון ב־Netlify
  plugins: [react()],
})
