import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.tsx'),
      name: '@kiuatelie/components',
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'ReactDOM',
        }
      },
      plugins: [
        // typescript({
        //   target: 'es2020',
        //   rootDir: path.resolve(__dirname, './src'),
        //   declaration: true,
        //   declarationDir: path.resolve(__dirname, './dist'),
        //   exclude: [
        //     path.resolve(__dirname, '../node_modules/**'),
        //   ],
        //   allowSyntheticDefaultImports: true,
        // }),
      ],
    },
  },
  plugins: [react(), eslintPlugin()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, '/src') }],
  },
})
