describe('Client Detail Navigation E2E', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8100/tabs/tabClients');
  });

  it('should navigate from clients list to client detail with correct ID', () => {
    // Click on first client (John Perez - ID 1)
    cy.get('ion-item').first().click();

    // Should navigate to detail page with ID 1
    cy.url().should('include', '/detail-client/1');
    cy.get('ion-text.field-value').should('contain', '1');
  });

  it('should display correct client name in detail page', () => {
    // Navigate to client 2 (Mary Garcia)
    cy.visit('http://localhost:8100/detail-client/2');

    // Should display Mary Garcia
    cy.get('ion-card-title').should('contain', 'Mary Garhas');
  });

  it('should display correct client tier in detail page', () => {
    // Navigate to client 1 (John Perez - VIP)
    cy.visit('http://localhost:8100/detail-client/1');

    // Should display VIP tier
    cy.get('ion-card-subtitle').should('contain', 'VIP');
  });

  it('should display correct data for each client ID', () => {
    // Test client 3 (Tech Solutions Company - Corporate)
    cy.visit('http://localhost:8100/detail-client/3');
    cy.get('ion-card-title').should('contain', 'Tech Solutions Company');
    cy.get('ion-card-subtitle').should('contain', 'Corporate');
  });

  it('should display unknown client for invalid ID', () => {
    cy.visit('http://localhost:8100/detail-client/999');

    cy.get('ion-card-title').should('contain', 'Client not found');
    cy.get('ion-card-subtitle').should('contain', 'Unknown');
  });

  it('should have back button that returns to clients tab with defaultHref', () => {
    cy.visit('http://localhost:8100/detail-client/1');

    // Back button should exist
    cy.get('ion-back-button').should('exist');

    // Back button should exist with defaultHref
    cy.get('ion-back-button').should(
      'have.attr',
      'defaultHref',
      '/tabs/tabClients',
    );

    // Click back button
    cy.get('ion-back-button').click();

    // Should navigate back to clients
    cy.url().should('include', '/tabs/tabClients');
  });

  it('should display all client IDs correctly and verify defaultHref', () => {
    const clients = [
      { id: '1', name: 'John Perez', tier: 'VIP' },
      { id: '2', name: 'Mary Garcia', tier: 'Frequent' },
      { id: '3', name: 'Tech Solutions Company', tier: 'Corporate' },
      { id: '4', name: 'Charles Rodriguez', tier: 'New' },
      { id: '5', name: 'Global Inc.', tier: 'International' },
    ];

    clients.forEach((client) => {
      cy.visit(`http://localhost:8100/detail-client/${client.id}`);
      cy.get('ion-text.field-value').should('contain', client.id);
      cy.get('ion-card-title').should('contain', client.name);
      cy.get('ion-card-subtitle').should('contain', client.tier);
      // Back button should exist with defaultHref
      cy.get('ion-back-button').should(
        'have.attr',
        'defaultHref',
        '/tabs/tabClients',
      );
      // Click back button
      cy.get('ion-back-button').click();
      // Should navigate back to clients
      cy.url().should('include', '/tabs/tabClients');
    });
  });

  it('should display correct client ID when navigating via click and return with back button', () => {
    const clients = [
      { id: '1', name: 'John Perez', tier: 'VIP' },
      { id: '2', name: 'Mary Garcia', tier: 'Frequent' },
      { id: '3', name: 'Tech Solutions Company', tier: 'Corporate' },
      { id: '4', name: 'Charles Rodriguez', tier: 'New' },
      { id: '5', name: 'Global Inc.', tier: 'International' },
    ];

    cy.visit('http://localhost:8100/tabs/tabClients');

    clients.forEach((client, idx) => {
      // Click on the client item by index
      cy.get('ion-item').eq(idx).click();
      // Verifica el ID mostrado
      cy.get('ion-text.field-value').should('contain', client.id);
      cy.get('ion-card-title').should('contain', client.name);
      cy.get('ion-card-subtitle').should('contain', client.tier);
      cy.get('ion-back-button').should(
        'have.attr',
        'defaultHref',
        '/tabs/tabClients',
      );
      // Vuelve atrás
      cy.get('ion-back-button').click();
      // Espera a que la lista esté visible de nuevo
      cy.url().should('include', '/tabs/tabClients');
    });
  });
});
