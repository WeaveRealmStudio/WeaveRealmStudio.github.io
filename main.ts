import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { AnimateDirective } from "./directives";
import "./styles/base.css";
import { createI18n } from "vue-i18n";  // 引入 createI18n

import zh from './locales/zh.json';
import en from './locales/en.json';

// 创建 i18n 实例
const i18n = createI18n({
   locale: "zh",  // 默认语言
   messages: {
     zh: zh,  // 中文翻译
     en: en,  // 英文翻译
   }
 });

createApp(App)
   .use(router)
   .use(createPinia())
   .use(i18n)
   .directive("animate", AnimateDirective)
   .mount("#vue-app");
