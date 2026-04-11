import { mount } from '@cypress/angular';
import { TabsPage } from './tabs.page';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';

describe('TabsPage Component', () => {
  it('should render tab bar', () => {
    mount(TabsPage, {
      imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
    });

    cy.get('ion-tab-bar').should('exist');
  });

  it('should render exactly three tab buttons', () => {
    mount(TabsPage, {
      imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
    });

    cy.get('ion-tab-button').should('have.length', 4);
  });

  it('should render all tab buttons with correct icons and labels', () => {
    mount(TabsPage, {
      imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
    });

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

  it('should render Clients tab with people icon', () => {
    mount(TabsPage, {
      imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
    });

    cy.get('ion-tab-button[tab="tabClients"]').within(() => {
      cy.get('ion-icon[name="people"]').should('exist').and('be.visible');
    });
  });

  it('should render Reservations tab with calendar-number icon', () => {
    mount(TabsPage, {
      imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
    });

    cy.get('ion-tab-button[tab="tabReservations"]').within(() => {
      cy.get('ion-icon[name="calendar-number"]')
        .should('exist')
        .and('be.visible');
    });
  });

  it('should render Products tab with pricetags icon', () => {
    mount(TabsPage, {
      imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
    });

    cy.get('ion-tab-button[tab="tabProducts"]').within(() => {
      cy.get('ion-icon[name="pricetags"]').should('exist').and('be.visible');
    });
  });

  it('should have correct href attributes for navigation', () => {
    mount(TabsPage, {
      imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
    });

    cy.get('ion-tab-button[tab="tabClients"]').should(
      'have.attr',
      'href',
      '/tabs/tabClients',
    );
    cy.get('ion-tab-button[tab="tabReservations"]').should(
      'have.attr',
      'href',
      '/tabs/tabReservations',
    );
    cy.get('ion-tab-button[tab="tabProducts"]').should(
      'have.attr',
      'href',
      '/tabs/tabProducts',
    );
  });
});
