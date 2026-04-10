// cypress/e2e/tabs-clients.e2e.cy.ts

/// <reference types="cypress" />

describe('Tabs - Clients', () => {
  beforeEach(() => {
    cy.visit('/tabs/tabClients');
  });

  it('debería mostrar el título de la página', () => {
    cy.get('ion-title').contains('Clients').should('be.visible');
  });

  it('debería mostrar el resumen de clientes', () => {
    cy.get('app-summary-metric').should('exist');
    cy.get('app-summary-metric').should('contain.text', 'Registered clients');
  });

  it('debería mostrar la lista de clientes', () => {
    cy.get('app-generic-list').should('exist');
    cy.get('app-generic-list ion-item').should('have.length.greaterThan', 0);
    cy.get('app-generic-list ion-icon').should(
      'have.attr',
      'name',
      'person-circle',
    );
  });
});
