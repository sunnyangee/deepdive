import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // 프로젝트 루트
  server: {
    port: 5173, // Vite 기본 포트
    open: true, // 브라우저 자동 열기
    base: './',
  },
});
