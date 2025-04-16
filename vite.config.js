import { defineConfig } from 'vite';
import htmlPlugin from 'vite-plugin-html';

export default defineConfig({
  base: '/portfolio_lucid/', // GitHub Pages 경로
  plugins: [
    htmlPlugin({
      inject: {
        // html 파일 내에서 사용할 변수를 설정할 수 있음
        injectBase: './', // 상대 경로로 설정
      },
    }),
  ],
});
