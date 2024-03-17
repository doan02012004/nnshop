// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        shop: resolve(__dirname, './asset/cuahang.html'),
        datail: resolve(__dirname, './asset/chitietsanpham.html'),
        cart: resolve(__dirname, './asset/giohang.html'),
        pay: resolve(__dirname, './asset/thanhtoan.html')
      },
    },
  },
})