
Cypress.Commands.add('registerUser', (email, password) => {
    return cy.request({
      method: 'POST',
      url: Cypress.env('api_url') + 'register',
      body: {
        email: email, // interpolando as variáveis
        password: password // interpolando as variáveis
      },
      failOnStatusCode: false,
    }).then((response) => {
      // Aqui você pode realizar as verificações
      if (response.status === 200) {
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('token');
      } else {
        throw new Error(`Erro ao registrar: ${response.statusText}`);
      }
      return response; // Retornando a resposta para ser usada se necessário
    });
  });
  