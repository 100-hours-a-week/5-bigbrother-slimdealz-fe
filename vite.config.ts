import { sentryVitePlugin } from '@sentry/vite-plugin';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isProduction = process.env.BUILD_APP_TYPE === 'production';

  return {
    json: {
      namedExports: true,
      stringify: false
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@mui/styled-engine': '@mui/styled-engine-sc'
      }
    },
    plugins: [
      react(),
      sentryVitePlugin({
        org: 'ktbbigbrother3',
        project: 'slimdealz',
        authToken: process.env.VITE_SENTRY_AUTH_TOKEN, // 여기서 변경
        sourcemaps: {
          assets: './dist/**',
          filesToDeleteAfterUpload: '**/*.map'
        }
      })
    ].filter(Boolean), // 플러그인 리스트에서 false 값을 제거
    build: {
      outDir: 'dist',
      sourcemap: isProduction, // 프로덕션 빌드에서만 sourcemap 생성
      rollupOptions: {
        output: {
          manualChunks: {
            // react와 react-dom을 별도의 청크로 분리
            react: ['react', 'react-dom'],
            vendor: ['axios'],
            mui: ['@mui/material', '@mui/icons-material', '@mui/system'],
            lottie: ['lottie-react'],
            lodash: ['lodash'],
            router: ['react-router-dom'],
            styledComponents: ['styled-components'],
            swiper: ['swiper']
          }
        }
      }
    }
  };
});
