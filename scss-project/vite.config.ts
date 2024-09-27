import type { UserConfig } from "vite";

export default {
  base: "/",
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
} satisfies UserConfig;
