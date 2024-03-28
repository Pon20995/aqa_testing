import { defineConfig } from 'cypress';
import lib from 'cypress-mochawesome-reporter/lib/index.js';
// import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin.js';
const { beforeRunHook, afterRunHook } = lib;
export default defineConfig({
  e2e: {
    // env: {
    //   gaQautoTestingUrl: 'https://qauto.forstudy.space/',
    // },
    experimentalStudio: true,
    // baseUrl: 'https://qauto.forstudy.space',
    retries: {
      openMode: 0,
      runMode: 2,
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'my-reporter-for-cypress-tests',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    setupNodeEvents(on, config) {
      // addMatchImageSnapshotPlugin(on);
      // implement node event listeners here
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });
      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
      const dynamicUrl =
        config.env.urlFromCli || 'https://qauto.forstudy.space';
      // const dynamicUrl = Cypress.env('BASE_URL');
      config.baseUrl = dynamicUrl;
      on('before:browser:launch', (browser, launchOptions) => {
        console.log(launchOptions.args);
        if (browser.name === 'chrome') {
          launchOptions.args.push('--incognito');
        }
        return launchOptions;
      });
      return config;
    },
  },
});
