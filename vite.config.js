import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh';
//const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {'@' : '/src' },
  },
  plugins: [
    reactRefresh(),
    react()
  ],
  base: "/portfolio-desktop/"
});