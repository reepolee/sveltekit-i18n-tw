import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/kit/vite";

const config = {
  kit: {
    adapter: adapter(),
    alias: {
      "$src": "./src",
      "$lib": "./src/lib",
      "$svg": "./src/svg"
    }
  },

  vitePlugin: {
    inspector: true,
  },

  preprocess: [vitePreprocess({})],
};

export default config;
