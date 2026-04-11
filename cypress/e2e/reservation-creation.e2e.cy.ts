describe('Reservation Creation E2E', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8100/#/tabs/tabReservations');
  });

  it('should navigate from reservations tab to create reservation page', () => {
    // Click on "Create reservation" button by icon
    cy.get('ion-button')
      .find('ion-icon[name="add-circle-outline"]')
      .parents('ion-button')
      .click();

    // Should navigate to create-reservation page
    cy.url().should('include', '/create-reservation');
  });

  it('should display create reservation page with correct title', () => {
    cy.visit('http://localhost:8100/#/create-reservation');

    // Should display correct title
    cy.get('ion-title').should('contain', 'Create Reservation');
  });

  it('should display form inputs on create reservation page', () => {
    cy.visit('http://localhost:8100/#/create-reservation');

    // Should have form inputs
    cy.get('ion-input').should('have.length.greaterThan', 0);
  });

  it('should have form fields with placeholder text', () => {
    cy.visit('http://localhost:8100/#/create-reservation');

    // Should have various input fields
    cy.get('ion-input[placeholder="Client full name"]').should('exist');
    cy.get('ion-input[type="number"]').should('exist');
  });

  it('should maintain form data visibility', () => {
    cy.visit('http://localhost:8100/#/create-reservation');

    // Check that form card is visible
    cy.get('ion-card').should('be.visible');

    // Check that form list is visible
    cy.get('ion-list').should('be.visible');
  });

  it('should fill the reservation form and go back with the lower back button', () => {
    cy.visit('http://localhost:8100/#/create-reservation');

    // Rellenar nombre
    cy.get('ion-input[placeholder="Client full name"] input')
      .clear()
      .type('Test User');
    // Rellenar número de personas
    cy.get('ion-input[type="number"] input').clear().type('7');
    // Cambiar opción de área preferida

    //cy.get('ion-select[placeholder="Select area"]').click();
    //cy.get('ion-select-option').contains('Main').click();
    // Confirmar selección pulsando OK
    //cy.get('ion-alert button, .alert-button, .alert-button-group button, .alert-button.sc-ion-alert-md',).contains(/^ok$/i).click({ force: true });

    // Pulsar el back button inferior (el que tiene el icono calendar-outline)
    cy.get('ion-back-button.custom-back-btn[icon="calendar-outline"]').click();

    // Comprobar que vuelve a reservas
    cy.url().should('include', '/tabs/tabReservations');
  });

  it('should navigate back to reservations tab when clicking back button with defaultHref', () => {
    cy.visit('http://localhost:8100/#/create-reservation');

    // Click only the header back button (slot="start")
    cy.get('ion-toolbar ion-buttons[slot="start"] ion-back-button').click();

    // Back button should have defaultHref
    cy.get('ion-back-button').should(
      'have.attr',
      'defaultHref',
      '/tabs/tabReservations',
    );

    // Should navigate to reservations tab
    cy.url().should('include', '/tabs/tabReservations');
  });

  it('should go to create reservation and return with header back button', () => {
    cy.visit('http://localhost:8100/#/tabs/tabReservations');
    // Click en el botón de crear reserva por el icono

    cy.get('ion-button')
      .find('ion-icon[name="add-circle-outline"]')
      .parents('ion-button')
      .click();
    cy.url().should('include', '/create-reservation');

    cy.get('ion-back-button').should(
      'have.attr',
      'defaultHref',
      '/tabs/tabReservations',
    );

    // Volver con el back button del header
    cy.get('ion-toolbar ion-buttons[slot="start"] ion-back-button').click();
    cy.url().should('include', '/tabs/tabReservations');
  });
});
