import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Clean, stable config for Vite + React + Tailwind v4
export default defineConfig({
  plugins: [react()],
});
