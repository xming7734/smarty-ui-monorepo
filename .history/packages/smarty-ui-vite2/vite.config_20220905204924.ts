import { defineConfig, Plugin_2 } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from "./config/unocss"

import { UserConfig } from "vitest"

const rollupOptions = {
  external: ["vue"],
  output: {
    globals: {
      vue: "Vue",
    }
  },
}

export const config = {
  plugins: [
    vue() as Plugin_2,
    vueJsx() as Plugin_2,
    Unocss() as Plugin_2[]
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  },
  build: {
    rollupOptions,
    minify: 'terser',
    sourcemap: true,
    brotliSize: true,
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "SmartyUI",
      fileName: "smarty-ui",
      // 导出模块格式
      formats: ["esm", "umd", "iife"],
    },
    outDir: "./dist"
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/]
    },
    coverage: {
      provider: "istanbul", // or 'c8',
      reporter: ["text", "json", "html"],
    }
  }
}

export default defineConfig(config as UserConfig)