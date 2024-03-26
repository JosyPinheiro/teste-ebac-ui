/// <reference types="cypress"/>


import produtosPage from "../../support/page-objects/produtos.page";


describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        produtosPage.visitarUrl()
    
    });
        it('Deve selecionar um produto da lista', () => {    
        produtosPage.buscarProdutoLista('Aether Gym Pant')

            cy.get('#tab-title-description > a').should('contain', 'Descrição')
            
    });

    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarPruduto('Augusta Pullover Jacket')

        cy.get('.product_title').should('contain', 'Augusta Pullover Jacket')
    });
  
    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Augusta Pullover Jacket')

        cy.get('.product_title').should('contain', 'Augusta Pullover Jacket')
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 7
        produtosPage.buscarPruduto('Abominable Hoodie')
        produtosPage.addProdutoCarrinho('XS', 'Red', qtd)

        cy.get('.woocommerce-message').should('contain' , qtd + ' × “Abominable Hoodie” foram adicionados no seu carrinho.' )

    });

    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarPruduto(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[0].tamanho, 
                dados[0].cor, 
                dados[0].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto) 
        })
    });
});