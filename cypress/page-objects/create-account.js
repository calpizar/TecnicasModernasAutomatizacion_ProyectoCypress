<reference types="Cypress"/>

class CreateAccountsPage{
    url ='/bankaccounts';
    elements ={
        getCreateAccountButton: () => cy.get('[data-test="bankaccount-new"]'),
        getBankName: () => cy.get('[data-test="bankaccount-bankName-input"]'),
        getRoutingNumber: () => cy.get('[data-test="bankaccount-routingNumber-input"]'),
        getAccountNumber: () => cy.get('[data-test="bankaccount-accountNumber-input"]'),
        getSaveButton: () => cy.get('[data-test="bankaccount-submit"]'),
    };
    
    visit(){
        cy.visit(this.url);
    }

    typeCreateAccountFields({ bankName = ' ', routingNumber = ' ', accountNumber = ' '} = {}) {
        this.elements.getBankName().clear().type(bankName);
        this.elements.getRoutingNumber().clear().type(routingNumber);
        this.elements.getAccountNumber().clear().type(accountNumber);
      }
    
      clickSaveAccount() {
        this.elements.getSaveButton().click();
      }
    }