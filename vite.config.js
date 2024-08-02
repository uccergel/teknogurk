import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import babel from '@rollup/plugin-babel'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx(),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react'],
      extensions: ['.js', '.jsx', '.md', '.mdx']
    })
  ],
  esbuild: {
    jsxInject: `import React from 'react'`
  }
})
