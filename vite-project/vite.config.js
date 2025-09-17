import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'


export default defineConfig(({ mode }) => ({
  base: mode === 'github' ? '/Labs/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))
