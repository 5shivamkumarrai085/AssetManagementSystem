import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "asset_management",
      filename: "remoteEntry.js",
      exposes: {
        "./AssetApp": "./src/App.jsx"
      },
      shared: ["react", "react-dom", "react-router-dom"]
    })
  ],
  server: {
    port: 5173
  },
  preview: {
    port: 5001
  },
  build: {
    target: "esnext"
  }
});
