import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  base: "/",

  plugins: [
    react(),
    federation({
      name: "asset_management",
      filename: "remoteEntry.js",
      exposes: {
        "./AssetApp": "./src/App.jsx",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: false,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: false,
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: false,
        },
      },
    }),
  ],

  server: {
    port: 5173,
    cors: true,
  },

  preview: {
    port: 5001,
    strictPort: true,
    cors: true,
  },

  build: {
    target: "esnext",
    cssCodeSplit: false,
  },
});