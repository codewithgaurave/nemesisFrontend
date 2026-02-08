import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,
    port: Number(process.env.PORT) || 4173,
    allowedHosts: [
      "www.nemesisgroup.in",
      "nemesisgroup.in",
      "jobportalnemesis.onrender.com",
    ],
  },
});