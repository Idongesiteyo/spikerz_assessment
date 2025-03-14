import { defineConfig } from "cypress";
import path from "path";
import dotenv from "dotenv";
import mochawesome from "cypress-mochawesome-reporter/plugin.js";
import grep from "@cypress/grep/src/plugin.js";

dotenv.config();

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://demo.spikerz.com',
    experimentalStudio: true,
    watchForFileChanges: false,
    defaultCommandTimeout: 120000,
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    failOnStatusCode: false,
    video: false,
    viewportWidth: 1920,
    viewportHeight: 957,
    reporterOptions: {
      reportDir: "cypress/reports",
      reportTitle: "My HTML Report",
      reportPageTitle: "Cypress Mochawesome Report",
      overwrite: false,
      html: true,
      json: true,
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: true,
    },

    setupNodeEvents(on, config) {
      mochawesome(on);
      console.log("HTTP Reporter plugin is loaded");
      grep(config);
      console.log('Grep configuration:', config.env.grep);
      config.env = process.env;
      return config;
    },

    env: {
      grepFilterSpecs: true,
      grepOmitFiltered: true,
      grepIntegrationFolder: 'cypress/e2e/test_cases',
    }
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },

  resolve: {
    alias: {
      "@pages": path.resolve(process.cwd(), "Pages/pageClasses"),
      "@fixtures": path.resolve(process.cwd(), "cypress/fixtures"),
    },
  },
  
});
