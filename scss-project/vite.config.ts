import type { UserConfig } from "vite";

export default {
  base: "/wild-code-school-java-2024/scss-project/",
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
} satisfies UserConfig;
