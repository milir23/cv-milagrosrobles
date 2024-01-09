import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/cv-milagrosrobles/',


  build: {
    assetsDir: 'assets', // Nombre de la carpeta donde se copiarán los archivos
  },
});
