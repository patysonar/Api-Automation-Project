describe('Registro de Usuário', () => {
  it('Registrando o usuário com sucesso', () => {
    // Teste de registro com status code esperado de 200
    cy.registerUser('eve.holt@reqres.in', 'pistol', 200).then((response) => {
      expect(response.status).to.eq(200); // Verifica se o status é 200
    });
  });

  it('Tentando registrar um usuário com dados inválidos', () => {
    cy.registerUser('sydney@fife', null, 500).then((response) => {
      expect(response.status).to.eq(400); // Verifica se o status é 400
      expect(response.body.error).to.include('Missing password');
    });
  });

  it('Atualizando o usuário', () => {
    // Teste de atualização com um usuário já registrado
    const userId = 2; // Um ID fixo ou gerado dinamicamente
    const updatedUserData = {
      nome: 'morpheus',
      emprego: 'zion resident',
    };
    cy.updateUser(userId, updatedUserData, 200).then((response) => {
      const updatedAt = response.body.updatedAt;
      cy.log(`Informações do usuário atualizadas com sucesso. Novo nome: ${response.body.nome}, 
        Novo emprego: ${response.body.emprego}, Data de atualização: ${updatedAt}`);
    });
  });

  it('Tentando atualizar o usuário com dados inválidos', () => {
    const userId = 2;
    const updatedUserData = {
      nome: '',
      emprego: '',
    };
    cy.updateUser(userId, updatedUserData, 400).then((response) => {
      cy.log(`Falha esperada na requisição: ${response.statusText}`);
    });
  });

  it('Deletando o usuário com sucesso', () => {
    // Teste de deleção do usuário
    let userId = 3;
    cy.deleteUser(userId); // Passando o ID do usuário para o comando de deleção
    cy.log(`Usuário com ID ${userId} deletado com sucesso.`);
  });

  it('Tentando deletar um usuário inexistente', () => {
    let userId = 99999; // ID fictício
    cy.deleteUser(userId, 404); // Espera-se erro 404 (não encontrado)
    cy.log('Falha esperada ao tentar deletar usuário inexistente.');
  });
});
