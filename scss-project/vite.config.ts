import type { UserConfig } from "vite";

export default {
  base: "/scss-project",
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
} satisfies UserConfig;
