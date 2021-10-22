/// <reference types="Cypress" />

import { CreateTransactionPage } from '../../page-objects/create-transactions';

context('Transactions', () => {
    beforeEach(() => {
      cy.apiLogin(Cypress.env('johnUser'), Cypress.env('johnPassword'));
    });

    it('should navigate to bank accounts', () => {
      cy.visit('/bankaccounts');
      cy.get('[data-test="nav-top-new-transaction"]').and('be.visible').click();
    });
  });

  context('Create New Transaction Request', () =>{
    it('should create new transaction request', () => {
    CreateTransactionPage.createNewTransactionRequest();
    cy.get(['data-test="nav-personal-tab']).click();
    cy.url().should('include','/personal');
    cy.get('[data-test^=transaction-item]').filter(':contains("requested")').first().should('be.visible');
    });

    context('Create New Transaction Payment', () =>{
        it('should create new transaction payment', () => {
        CreateTransactionPage.createNewTransactionPayment();
        cy.get(['data-test="nav-personal-tab']).click();
        cy.url().should('include','/personal');
        cy.get('[data-test^=transaction-item]').filter(':contains("paid")').first().should('be.visible');
        });
    });
     
});