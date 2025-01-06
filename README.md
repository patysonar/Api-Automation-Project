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
### **1. Testes Locais**
Para executar os testes de API, utilize o comando:
- npx cypress open

### **2. Configuração de Variáveis de Ambiente**
Caso necessário, configure variáveis de ambiente no arquivo .env. 
- Exemplo:
API_BASE_URL=https://reqres.in

## 📊 Relatórios
Os relatórios gerados pelos testes serão armazenados no diretório cypress/reports.
Para visualizar os relatórios:
1. Navegue até a pasta cypress/reports.
2. Abra o arquivo HTML gerado no navegador.

## 🛠️ Scripts Disponíveis
- npx cypress open ou npm run cypress:run:dev : Executa os testes de API.
- npm run generate-report: Gera relatórios detalhados dos testes (se configurado).


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
├── package.json             # Dependências do projeto
├── README.md                # Documentação do projeto
└── cypress.config.js        # Configurações do Cypress
                             # - Define ambientes (dev, stg, local)
                             # - Configura URLs base e variáveis de ambiente
                             # - Configurações de relatórios (mochawesome)
                             # - Gerencia eventos e ajustes customizados para os testes

