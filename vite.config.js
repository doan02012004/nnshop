// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        shop: resolve(__dirname, './layout/shop.html'),
        detail: resolve(__dirname, './layout/product.html'),
        cart: resolve(__dirname, './layout/cart.html'),
        pay: resolve(__dirname, './layout/pay.html')
      },
    },
  },
})