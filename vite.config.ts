import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [tailwindcss()],
    // Uncomment to use JSX:
    esbuild: {
        jsx: "transform",
        jsxFactory: "m",
        jsxFragment: "'['",
    },
    optimizeDeps: {
        include: ['mithril']
    }
});
