// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import appendHeadScriptsAtBody from "./appendHeadScriptsAtBody";

export default defineConfig({
  plugins: [
    appendHeadScriptsAtBody({
      // addStringAtStart: "/dist/amir",
      // removeStringFromStart: "/src/pages",
      srcWithDataSrc: true,
      defer: true,
    }),
  ],
  server: {
    open: "/",
    port: "4000",
  },
  build: {
    outDir: "dist",
    // assetsDir: "src/pages/bundle",

    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
      output: {
        main: "index.html",
        nested: "about.html",
      },
    },
  },
});
