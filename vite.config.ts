/// <reference types="vitest" />
import { UserConfig } from "vite";
import path from "node:path";
import vue from "@vitejs/plugin-vue";

export default <UserConfig>{
   plugins: [vue()],
   resolve: {
      alias: {
         "@": path.resolve(__dirname, "."),
      },
   },
   test: {
      environment: "happy-dom",
   },
   // 对于 GitHub Pages，仓库名为 "weaverealmstudio.github.io"，不需要设置 base 或设置为空
   base: '/', // 或不设置 base，GitHub 自动处理根路径
};
