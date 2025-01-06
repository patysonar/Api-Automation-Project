# Api-Automation-Project
Este projeto é uma solução de automação de testes de API utilizando o endpoint [Reqres.in](https://reqres.in).

---

## 🚀 Funcionalidades Automação

- Registro de usuário bem-sucedido na rota `/api/register`.

---

## 📋 Configuração do Projeto

### **1. Pré-requisitos**
- **Node.js**: Certifique-se de ter o Node.js instalado em sua máquina (versão recomendada: `16.x` ou superior).
- **npm**: O gerenciador de pacotes do Node.js deve estar configurado.

### **2. Clonar o Repositório**
Use o comando abaixo para clonar o projeto:

git clone https://github.com/seu-usuario/Api-Automation-Project.git


### **3. Instalar Dependências**
Entre no diretório do projeto e instale as dependências necessárias:
- cd Api-Automation-Project
- npm install


### **4. Configuração de Variáveis de Ambiente**
O projeto utiliza o arquivo `cypress.config.js` para ajustar automaticamente as configurações de ambiente (desenvolvimento, staging ou local) sem a necessidade de variáveis externas.

#### **Como funciona a configuração no `cypress.config.js`:**
Dependendo do ambiente configurado diretamente no código, o Cypress ajusta automaticamente as URLs e outras configurações relevantes.

#### **Exemplo de Configuração de URLs para Ambientes**
Neste projeto, utilizamos a URL `https://reqres.in` em todos os ambientes, pois é uma API pública amplamente usada para testes e demonstrações de automação. Caso seu projeto tenha APIs próprias, substitua pelas URLs reais dos seus ambientes.

- **Ambiente de Desenvolvimento (`env = 'dev'`):**
  - `baseUrl`: `https://reqres.in`
  - `api_url`: `https://reqres.in/api/`

- **Ambiente de Staging (`env = 'stg'`):**
  - `baseUrl`: `https://reqres.in`
  - `api_url`: `https://reqres.in/api/`

- **Ambiente Local (ou padrão, sem especificação de ambiente):**
  - `baseUrl`: `https://reqres.in/api/`
  - `api_url`: `https://reqres.in/api/`

---


## ▶️ Execução dos Testes

### **1. Executando os Testes**
O projeto oferece diferentes formas de execução dos testes, dependendo do ambiente ou do tipo de relatório necessário.

- npx cypress open: Abre o Cypress no modo interativo para execução manual dos testes.
- npm run cypress:run:dev: Executa os testes diretamente no terminal para o ambiente de desenvolvimento.
- npm run generate-report: Gera relatórios detalhados com base nos testes executados (se configurado no projeto).


### **2. Configuração de Variáveis de Ambiente**
Caso necessário, configure variáveis de ambiente no arquivo .env. 
- Exemplo:
API_BASE_URL=https://reqres.in

## 📋 Linting do Código
Este projeto utiliza o ESLint para garantir que o código siga padrões de qualidade e estilo.

### **Comandos de Lint**
lint: Verifica o código e reporta quaisquer problemas de linting.
- npm run lint

lint:fix: Verifica o código e tenta corrigir automaticamente os problemas de lint.
- npm run lint:fix

### **Como funciona**
- lint: Executa o comando npx eslint cypress/**/*.cy.js cypress/support/**/*.js para verificar os arquivos de teste e suporte do Cypress.
- lint:fix: Usa o comando npx eslint cypress/**/*.cy.js cypress/support/**/*.js --fix para corrigir problemas automaticamente.


## 📊 Relatórios
Os relatórios gerados pelos testes serão armazenados no diretório cypress/reports.
Para visualizar os relatórios:
1. Navegue até a pasta cypress/reports.
2. Abra o arquivo HTML gerado no navegador.


## 📂 Estrutura do Projeto
```plaintext
Api-Automation-Project/
│
├── cypress/
│   ├── downloads/           # Arquivos baixados durante os testes
│   ├── e2e/                 # Arquivos de testes de API
│   ├── fixtures/            # Dados de entrada para os testes
│   ├── reports/             # Relatórios gerados pelos testes
│   └── support/             # Configurações e comandos customizados
│
├── .github/                 # Configuração de workflows (CI/CD)
├── .env                     # Variáveis de ambiente (opcional)
├── .gitignore               # Arquivos/diretórios ignorados no controle de versão
├── .prettierrc              # Configuração do Prettier
├── eslint.config.js         # Configuração do ESLint
├── package.json             # Dependências do projeto
├── package-lock.json        # Versões bloqueadas das dependências
├── README.md                # Documentação do projeto
└── cypress.config.js        # Configurações do Cypress
                             # - Define ambientes (dev, stg, local)
                             # - Configura URLs base e variáveis de ambiente
                             # - Configurações de relatórios (mochawesome)
                             # - Gerencia eventos e ajustes customizados para os testes

