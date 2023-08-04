import { vitePreprocess } from "@sveltejs/kit/vite";
import adapter from "@sveltejs/adapter-node";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      "$src": "./src"
    }
  },

  vitePlugin: {
    inspector: true,
  },

  preprocess: [vitePreprocess({})],
};

export default config;
