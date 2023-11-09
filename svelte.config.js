import { vitePreprocess } from "@sveltejs/kit/vite";
import adapter from "@sveltejs/adapter-node";

const config = {
  kit: {
    adapter: adapter(),
    alias: {
      "$src": "./src",
      "$svg": "./src/svg"
    }
  },

  vitePlugin: {
    inspector: true,
  },

  preprocess: [vitePreprocess({})],
};

export default config;
