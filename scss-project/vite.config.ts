import type { UserConfig } from "vite";

export default {
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
} satisfies UserConfig;
