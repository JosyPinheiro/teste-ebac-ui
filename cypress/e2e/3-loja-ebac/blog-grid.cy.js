/// <reference types="cypress"/>

describe('Funcionalidade: Blog', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/blog-grid/')
    });
    
    it('Deve abrir uma noticias do Blog', () => {
        cy.get(':nth-child(2) > .post-grid > .post > .entry-thumb > .entry-image > .attachment-thumbnail').click()
        
        cy.get('.title').should('contain' , 'Leave a Comment')



        
    });
});