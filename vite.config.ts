import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/a-core-testing/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // server: {
  //   proxy: {
  //     "/graphql": {
  //       target: "http://185.207.66.100:8080/graphql",
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
});
