/* eslint-disable no-undef */
context('Functional Tests for Blog Website', () => {
  it('Go to Blogs Page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[href="/blog"]').click();
    cy.url().should('eq', 'http://localhost:3000/blog');
  });

  it('Go to Home Page', () => {
    cy.visit('http://localhost:3000/blog');
    cy.get('[href="/"]').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});
