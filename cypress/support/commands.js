Cypress.Commands.add(
  'registerUser',
  (email, password, expectedStatusCode = 200) => {
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
        // Validar o status code esperado, passando o código como parâmetro
        expect(response.status).to.eq(expectedStatusCode);

        // Log do retorno da API em ambos os cenários (sucesso e erro)
        if (response.status === 200) {
        } else {
        }

        // Encadeia a resposta para uso posterior
        return cy.wrap(response);
      });
  },
);

Cypress.Commands.add(
  'updateUser',
  (userId, userData, expectedStatusCode = 200) => {
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
  },
);

Cypress.Commands.add('deleteUser', (userId, expectedStatusCode = 204) => {
  return cy
    .request({
      method: 'DELETE',
      url: `${Cypress.env('api_url')}users/${userId}`,
      failOnStatusCode: false,
    })
    .then(() => {});
});
