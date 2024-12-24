import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // 프로젝트 루트
  server: {
    port: 5173, // Vite 기본 포트
    open: true, // 브라우저 자동 열기
    base: './',
  },
  build: {
    outDir: 'dist', // 빌드 디렉터리
    assetsDir: '',  // 정적 파일 디렉터리
    copyPublicDir: true, // public 폴더 복사
    rollupOptions: {
      input: {
          main: './index.html',
          loading: './public/loading.html', // 추가된 HTML
      },
    },
  },
});
