describe('Registro de Usuário', () => {
  it('Registrando o usuário com sucesso', () => {
    // Teste de registro
    cy.registerUser('eve.holt@reqres.in', 'pistola').then((response) => {
      const userId = response.body.id;
      const userToken = response.body.token;

      cy.log(
        `Requisição realizada com sucesso! ID: ${userId}, Token: ${userToken}`,
      );
    });
  });

  it('Atualizando o usuário', () => {
    // Teste de atualização com um usuário já registrado
    const userId = 2; // Um ID fixo ou gerado dinamicamente
    const updatedUserData = {
      nome: 'morpheus',
      emprego: 'zion resident',
    };
    cy.updateUser(userId, updatedUserData).then((response) => {
      const updatedAt = response.body.updatedAt;
      cy.log(`Informações do usuário atualizadas com sucesso. Novo nome: ${response.body.nome}, 
        Novo emprego: ${response.body.emprego}, Data de atualização: ${updatedAt}`);
    });
  });

  it('Deletando o usuário com sucesso', () => {
    // Teste de deleção do usuário
    let userId;
    cy.deleteUser(userId); // Passando o ID do usuário para o comando de deleção
    cy.log(`Usuário com ID ${userId} deletado com sucesso.`);
  });
});
