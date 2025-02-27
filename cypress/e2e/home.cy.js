/// <reference types="cypress" />

describe('My App', () => {
  beforeEach(() => {
    cy.visit('https://lrnr-app-team-2.onrender.com');
  });

  it('should display the home page', () => {
    cy.contains('enlightenment').should('be.visible');
  });

  it('should navigate to the account page', () => {
    cy.contains('Account').click();
    cy.url().should('include', '/account');
    cy.contains('Account').should('be.visible');
  });

  it('should display a button', () => {
    cy.get('button').should('contain.text', 'Begin Journey');
  });

  it('should contain a footer', () => {
    cy.get('footer').should('be.visible');
  });
});