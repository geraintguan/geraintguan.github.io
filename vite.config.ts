import react from "@vitejs/plugin-react-swc";
import fonts from "unplugin-fonts/vite";
import { defineConfig } from "vite";
import ssr from "vite-plugin-ssr/plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    fonts({
      google: {
        families: ["Inter"],
      },
    }),
    ssr({ prerender: true }),
  ],
});
