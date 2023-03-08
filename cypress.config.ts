import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    "cypress-react-selector": {
      root: "#root",
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
