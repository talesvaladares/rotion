import path from "node:path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],

    // configurar caminho no electron.vite.config
    publicDir: path.resolve("resources"),
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    // para criar variaveis globais dentro do define
    // configurar o define dentro do electron.vite.config
    define: {
      "process.platform": JSON.stringify(process.platform),
    },
    // #region fazer a configuração do tailwind no electron.vite.config
    css: {
      postcss: {
        plugins: [
          tailwindcss({
            config: "./src/renderer/tailwind.config.js",
          }),
        ],
      },
    },
    // #endregion
    resolve: {
      alias: {
        "@renderer": path.resolve("src/renderer/src"),
      },
    },
    plugins: [react()],
  },
});
