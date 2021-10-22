<reference types="Cypress"/>

class CreateTransactionPage{
    url ='/transaction/new';
    elements ={
        getAmount: () => cy.get('[data-test="transaction-create-amount-input"]'),
        getAddNote: () => cy.get('[data-test="transaction-create-description-input"]'),
        getRequestButton: () => cy.get('[data-test="transaction-create-submit-request"]'),
        getPayButton: () => cy.get('[data-test="transaction-create-submit-payment"]'),
        getReturntoTransactionButton: () => cy.get('[data-test="new-transaction-return-to-transactions"]'),
        getAnotherTransactionButton: () => cy.get('[data-test="new-transaction-create-another-transactions"]'),
    };
    
    visit(){
        cy.visit(this.url);
    }

    createNewTransactionRequest (){
        cy.get('[data-test^=transaction-item]').filter(':contains("Edgar")').first().click();
        this.elements.getAmount.type("25");
        this.elements.getAddNote.type("new transaction request");
        this.elements.getRequestButton.click();
        this.elements.getReturntoTransactionButton.click();
    }

    createNewTransactionPayment (){
        cy.get('[data-test^=transaction-item]').filter(':contains("Edgar")').first().click();
        this.elements.getAmount.type("50");
        this.elements.getAddNote.type("new payment");
        this.elements.getPayButton.click();
        this.elements.getAnotherTransactionButton.click();
    }
}