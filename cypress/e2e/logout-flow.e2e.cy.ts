describe('Logout Flow E2E', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8100/tabs/tabProducts');
  });

  it('should navigate to products tab', () => {
    // Should be on products tab
    cy.url().should('include', '/tabs/tabProducts');
    cy.get('ion-title').should('contain', 'Products');
  });

  it('should display logout button on products tab', () => {
    cy.get('ion-button').contains('Log out').should('exist').and('be.visible');
  });

  it('should navigate to login page when clicking logout button', () => {
    // Click logout button
    cy.get('ion-button').contains('Log out').click();

    // Should navigate to login page
    cy.url().should('include', '/login');
  });

  it('should allow typing in login fields and clicking login button', () => {
    cy.visit('http://localhost:8100/login');
    cy.get('ion-input[type="email"] input')
      .type('test@example.com')
      .should('have.value', 'test@example.com');
    cy.get('ion-input[type="password"] input')
      .type('password123')
      .should('have.value', 'password123');
    cy.get('ion-button').contains('Log In').click();
    // No redirección ni error esperado, solo interacción
  });

  it('should have logout button with correct styling/visibility', () => {
    // Logout button should be visible and clickable
    cy.get('ion-button')
      .contains('Log out')
      .should('be.visible')
      .should('not.be.disabled');
  });
});
