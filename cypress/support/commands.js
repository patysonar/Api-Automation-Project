Cypress.Commands.add('registerUser', (email, password) => {
  return cy
    .request({
      method: 'POST',
      url: Cypress.env('api_url') + 'register',
      body: {
        email: email, // interpolando as variáveis
        password: password, // interpolando as variáveis
      },
      failOnStatusCode: false,
    })
    .then((response) => {
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

Cypress.Commands.add('updateUser', (userId, userData) => {
  return cy
    .request({
      method: 'PATCH',
      url: `${Cypress.env('api_url')}users/${userId}`,
      body: userData,
      failOnStatusCode: false,
    })
    .then((response) => {
      if (response.status === 200) {
        expect(response.body).to.have.property('nome', userData.nome);
        expect(response.body).to.have.property('emprego', userData.emprego);
        expect(response.body).to.have.property('updatedAt'); // Alterar 'atualizado em' para 'updatedAt'
      } else {
        throw new Error(`Erro ao atualizar usuário: ${response.statusText}`);
      }
      return response;
    });
});

Cypress.Commands.add('deleteUser', (userId) => {
  return cy
    .request({
      method: 'DELETE',
      url: `${Cypress.env('api_url')}users/${userId}`,
      failOnStatusCode: false,
    })
    .then(() => {
      cy.log(`Usuário com ID ${userId} deletado com sucesso.`);
    });
});
