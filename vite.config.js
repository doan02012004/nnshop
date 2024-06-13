// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        product: resolve(__dirname, './product.html'),
        detail: resolve(__dirname, './product-detail.html'),
        product1: resolve(__dirname, './src/product1.html'),
        productdetail: resolve(__dirname, './src/product-detail1.html'),
      },
    },
  },
})