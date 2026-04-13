import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import webfontDownload from "vite-plugin-webfont-dl";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    webfontDownload([
      // 載入 google font
      "https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap",
    ]),
  ],
});
