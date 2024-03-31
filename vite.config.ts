import react from "@vitejs/plugin-react-swc";
import fonts from "unplugin-fonts/vite";
import ssr from "vike/plugin";
import { defineConfig } from "vite";

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
  resolve: {
    alias: {
      "#root": __dirname,
    },
  },
});
