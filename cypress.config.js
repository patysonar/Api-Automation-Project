const { defineConfig } = require("cypress");
require('dotenv').config(); // Não precisaremos de dotenv, mas mantemos se quiser continuar com alguma outra configuração do .env

module.exports = defineConfig({
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
        config.baseUrl = 'https://localhost:3000'; // URL local
        config.env = {
          env: 'local',
          api_url: 'https://localhost:3000/api/v1/' // URL da API local
        };
      }

      // Retorna a configuração ajustada
      return config;
    },
  },
});
