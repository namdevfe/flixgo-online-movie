import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths()],

  // Add config resolve alias
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
