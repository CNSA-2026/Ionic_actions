import { mount } from '@cypress/angular';
import { TabsPage } from './tabs.page';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';

describe('TabsPage Component', () => {
  it('should render all tab buttons with correct icons and labels', () => {
    mount(TabsPage, {
      imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
    });
    // Espera a que los tabs se rendericen
    cy.get('ion-tab-bar').should('exist');
    cy.get('ion-tab-button[tab="tabClients"]').within(() => {
      cy.get('ion-icon[name="people"]').should('exist');
      cy.contains('Clients');
    });
    cy.get('ion-tab-button[tab="tabReservations"]').within(() => {
      cy.get('ion-icon[name="calendar-number"]').should('exist');
      cy.contains('Reservations');
    });
    cy.get('ion-tab-button[tab="tabProducts"]').within(() => {
      cy.get('ion-icon[name="pricetags"]').should('exist');
      cy.contains('Products');
    });
  });
});
