Cypress.Commands.add(
  'registerUser',
  (email, password, expectedStatusCode = 200) => {
    return cy
      .request({
        method: 'POST',
        url: Cypress.env('api_url') + 'register',
        body: {
          email: email,
          password: password,
        },
        failOnStatusCode: false, // Não interrompe o teste caso o status seja diferente de 2xx
      })
      .then((response) => {
        // Verifica se o status é o esperado (200 ou 400)
        if (response.status === 200) {
          // Se o status for o esperado, loga o sucesso
          cy.log(
            `Requisição realizada com sucesso! ID: ${response.body.id}, Token: ${response.body.token}`,
          );
        } else if (response.status === 400) {
          // Caso seja 400, loga a mensagem de erro esperada
          cy.log(
            `Erro esperado: Status ${response.status}, Mensagem: ${response.body.error || 'Sem mensagem de erro'}`,
          );
        } else {
          // Se for qualquer outro status diferente de 200 ou 400, loga a mensagem de erro genérica
          cy.log(
            `Erro inesperado: Status ${response.status}, Mensagem: ${response.body.error || 'Sem mensagem de erro'}`,
          );
        }

        // Retorna a resposta para uso posterior
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
