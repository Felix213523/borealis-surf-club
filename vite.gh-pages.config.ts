import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/borealis-surf-club/",
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});
