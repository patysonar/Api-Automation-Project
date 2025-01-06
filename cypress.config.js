import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const env = process.env.CYPRESS_ENVIROMENT; // Pega o valor de CYPRESS_ENVIROMENT

      // Dependendo do ambiente, configura as URLs
      if (env === 'dev') {
        config.baseUrl = 'https://reqres.in'; // URL de desenvolvimento
        config.env = {
          env: 'dev',
          api_url: 'https://reqres.in/api/' // URL completa da API de desenvolvimento
        };
      } else if (env === 'stg') {
        config.baseUrl = 'https://reqres.in'; // URL de staging
        config.env = {
          env: 'stg',
          api_url: 'https://reqres.in/api/' // URL completa da API de staging
        };
      } else {
        config.baseUrl = 'https://reqres.in/api/'; // URL local
        config.env = {
          env: 'local',
          api_url: 'https://reqres.in/api/' // URL da API local
        };
      }

      // Retorna a configuração ajustada
      return config;
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
});
