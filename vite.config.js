import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/webbutveckling/",
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    allowedHosts: ["localhost", "yourdomain.com", "ranking-giant-chips-www.trycloudflare.com"]
  }
});
