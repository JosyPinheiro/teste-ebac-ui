/// <reference types="cypress" />

describe('Funcionalidade: Detalhes da conta', () => {
 
    beforeEach(function () {
        cy.visit('minha-conta/edit-account/')
        cy.fixture('perfil').then(login =>(
            cy.login(login.usuario, login.senha)

        ))
    });

    it('Deve completar os detalhes da conta com sucesso', () => {
        cy.detalhesConta('Josy', 'Pinheiro', 'josy.qa')
    });


});