<reference types="Cypress"/>

class HomePage{
    url =' ';
    elements ={
        getHomeButton: () => cy.get('[data-test="sidenav-home]'),
        getTransactionItem: () => cy.get('[data-test^=transaction-item]'),
        getLikeButton: () => cy.get('[data-test^=transaction-like-button]'),
        getComment: () => cy.get('[data-test^=transaction-comment-button]'),
    };

    visit(){
        cy.visit(this.url);
    }

    addLiketoTransaction(){
        this.elements.getTransactionItem.third().click();
        this.elements.getLikeButton.should('be.visible').click();
        this.elements.getLikeButton.should('not.be.visible');
        this.elements.getHomeButton.click();
    }
    addCommenttoTransaction(){
        this.elements.getTransactionItem.fourth().click();
        this.elements.getComment.should('be.visible').clear().type("invoice 98328").trigger();
        this.elements.getHomeButton.click();
    }
}

export const homePage = new HomePage ();