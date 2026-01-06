import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // 将 React 相关库单独打包
          'react-vendor': ['react', 'react-dom'],
          // 将 markdown 相关库单独打包
          'markdown-vendor': ['react-markdown', 'remark-gfm'],
          // 将 PDF 生成相关库单独打包
          'pdf-vendor': ['jspdf', 'html2canvas'],
        },
      },
    },
    // 提高 chunk 大小警告阈值到 1000KB
    chunkSizeWarningLimit: 1000,
  },
})

