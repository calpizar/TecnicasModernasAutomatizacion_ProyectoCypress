<reference types="Cypress"/>

class RegisterPage{
    url ='/signup';
    elements ={
        getFirstName: () => cy.get('firstName'),
        getLastName: () => cy.get('lastName'),
        getUsername:() => cy.get('username'),
        getPassword:() => cy.get('password'),
        getConfirmPassword:() => cy.get('confirmPassword'),
        getSignUpButton: () => cy.get('[data-test="signup-submit"]'),
    };

    visit(){
        cy.visit(this.url);
    }

    typeFormFields({ firstName = ' ', lastName = ' ', username = ' ', password = ' ', confirmPassword = ' '} = {}) {
        this.elements.getFirstName().clear().type(firstName);
        this.elements.getLastName().clear().type(lastName);
        this.elements.getUsername().clear().type(username);
        this.elements.getPassword().clear().type(password);
        this.elements.getConfirmPassword().clear().type(confirmPassword);
      }
    
      clickSignUp() {
        this.elements.getSignUpButton().click();
      }
    }
    export const registerPage = new RegisterPage ();
