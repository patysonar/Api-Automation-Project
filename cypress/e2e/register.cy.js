
describe('Registro de Usuário', () => {
  let userId;
  let userToken;
  before(() => {
    cy.registerUser('eve.holt@reqres.in', 'pistola').then((response) => {
      userId = response.body.id;
      userToken = response.body.token;
    });
  });

  it('Deve registrar o usuário com sucesso', () => {
    // Teste de registro
    cy.log(`Requisição realizada com sucesso! ID: ${userId}, Token: ${userToken}`);
  });
});

  