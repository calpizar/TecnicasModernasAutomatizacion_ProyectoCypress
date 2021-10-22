/// <reference types="Cypress" />

import { CreateAccountsPage } from '../../page-objects/create-account';

context('Bank Accounts', () => {
    beforeEach(() => {
      cy.apiLogin(Cypress.env('johnUser'), Cypress.env('johnPassword'));
    });

    it('should navigate to bank accounts', () => {
      cy.visit('/bankaccounts');
      cy.get('[data-test="bankaccount-new"]').and('be.visible').click();
    });


  context('Create New Bank Account', () =>{
    it('should create new bank account', () => {
    CreateAccountsPage.typeCreateAccountFields({
        banktName: Cypress.env('bankName'),
        routingNumber: Cypress.env('routingNumber'),
        accountNumber: Cypress.env('accountNumber'),
      });
      CreateAccountsPage.clickSaveButton();
      cy.url().should('include', '/bankaccounts');
      cy.get('[data-test^=bankaccount-list-item]').contains("CITIBANK").should('be.visisble');
    });
  });

    context('Delete Bank Account', () =>{
      it('should delete bank account', () => {
        cy.get('[data-test^=bankaccount-list-item]').contains("CITIBANK").first().find('button').click();
      });
    });
  });