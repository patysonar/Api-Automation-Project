import prettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  {
    files: ['**/*.js', '**/*.cy.js'],
    languageOptions: {
      globals: {
        Cypress: 'readonly',  // Adiciona o Cypress como variável global de leitura
        cy: 'readonly',       // Adiciona o 'cy' como variável global de leitura
      },
      parserOptions: {
        ecmaVersion: 12,      // Configura a versão do ECMAScript
      },
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'quotes': ['error', 'single'],  // Configura o ESLint para usar aspas simples
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "indent": ["error", 2],
      "no-trailing-spaces": "error"
    },
  },
  {
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': [
        'error', { singleQuote: true }
      ],

    },
  },
];

export default config;

