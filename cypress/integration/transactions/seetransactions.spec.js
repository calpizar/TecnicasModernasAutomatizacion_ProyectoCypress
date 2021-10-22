/// <reference types="Cypress" />

import { homePage } from '../../page-objects/home-page';

context('Home Page', () => {
    beforeEach(() => {
      cy.apiLogin(Cypress.env('johnUser'), Cypress.env('johnPassword'));
    });

    it('should navigate to bank accounts', () => {
      cy.visit('/bankaccounts');
      cy.get('[data-test="sidenav-home]').and('be.visible').click();
    });
  });

  context('Home Page Transactions - Like', () =>{
    it('should like transaction item', () => {
    homePage.addLiketoTransaction();
        });
    });
    context('Home Page Transactions - Comment', () =>{
        it('should add comment to transaction item', () => {
        homePage.addCommenttoTransaction();
        cy.get('[data-test^=comment-list-item]').assert.isNotEmpty({});
        });
    });