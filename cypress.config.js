import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'sz5mxh',
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      // vite config function - the result is merged with
      // any `vite.config` file that is detected
      viteConfig: async () => {
        // ... do things ...
        const modifiedConfig = await injectCustomConfig(baseConfig)
        return modifiedConfig
      },
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});