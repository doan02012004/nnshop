// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: './', // Thư mục gốc của dự án
  build: {
    outDir: 'dist', // Thư mục đầu ra sau khi build
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        product: resolve(__dirname, './product.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@assets': './assets',
    },
  },
})