import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
const htmlPlugin = require('vite-plugin-html'); // HTML 플러그인 추가

export default defineConfig({
  base: '/portfolio_lucid/', // GitHub Pages 경로 설정
  plugins: [
    react(),
    svgr(),
    htmlPlugin({
      inject: {
        injectBase: './', // 빌드 후 리소스 경로를 상대 경로로 설정
      },
    }),
  ],
})
