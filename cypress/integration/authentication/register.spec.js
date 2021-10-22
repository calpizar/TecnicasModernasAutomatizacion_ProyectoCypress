///<reference types="Cypress" />

import { registerPage } from '../../page-objects/register-page';

describe('Register Tests', () => {
    it('should Rregister new user', () => {
        registerPage.typeFormFields({
            firstName: Cypress.env('firstName'),
            lastName: Cypress.env('lastName'),
            username: Cypress.env('newUsername'),
            password: Cypress.env('newPassword'),
            confirmPasword: Cypress.env('newPassword')
          });
          registerPage.clickSignUp();
          cy.url().should('include', '/signin');
          cy.get('#username').type(Cypress.env('newUsername'));
            cy.get('#password').type(Cypress.env('newPassword'));
            cy.get('[data-test="signin-submit"]').click();
        });
});