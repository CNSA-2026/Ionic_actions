import { mount } from '@cypress/angular';
import { TabClientsPage } from './tabClients.page';
import { GenericListComponent } from '../../../shared/components/generic-list/generic-list.component';
import { SummaryMetricComponent } from '../../../shared/components/summary-metric/summary-metric.component';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCol,
  IonGrid,
  IonRow,
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';

describe('TabClientsPage Component', () => {
  it('should render with correct title', () => {
    mount(TabClientsPage, {
      imports: [
        TabClientsPage,
        GenericListComponent,
        SummaryMetricComponent,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonCol,
        IonGrid,
        IonRow,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: {}, params: {}, queryParams: {} },
        },
      ],
    });

    cy.get('ion-title').should('contain', 'Clients');
  });

  it('should render SummaryMetricComponent', () => {
    mount(TabClientsPage, {
      imports: [
        TabClientsPage,
        GenericListComponent,
        SummaryMetricComponent,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonCol,
        IonGrid,
        IonRow,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: {}, params: {}, queryParams: {} },
        },
      ],
    });

    cy.get('app-summary-metric').should('exist');
  });

  it('should render GenericListComponent with clients', () => {
    mount(TabClientsPage, {
      imports: [
        TabClientsPage,
        GenericListComponent,
        SummaryMetricComponent,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonCol,
        IonGrid,
        IonRow,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: {}, params: {}, queryParams: {} },
        },
      ],
    });

    cy.get('app-generic-list').should('exist');
  });

  it('should display correct number of client items', () => {
    mount(TabClientsPage, {
      imports: [
        TabClientsPage,
        GenericListComponent,
        SummaryMetricComponent,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonCol,
        IonGrid,
        IonRow,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: {}, params: {}, queryParams: {} },
        },
      ],
    });

    cy.get('ion-item').should('have.length', 5);
  });

  it('should display all client names in the list', () => {
    mount(TabClientsPage, {
      imports: [
        TabClientsPage,
        GenericListComponent,
        SummaryMetricComponent,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonCol,
        IonGrid,
        IonRow,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: {}, params: {}, queryParams: {} },
        },
      ],
    });

    cy.contains('John Perez').should('be.visible');
    cy.contains('Mary Garcia').should('be.visible');
    cy.contains('Tech Solutions Company').should('be.visible');
    cy.contains('Charles Rodriguez').should('be.visible');
    cy.contains('Global Inc.').should('be.visible');
  });

  it('should display all client descriptions in the list', () => {
    mount(TabClientsPage, {
      imports: [
        TabClientsPage,
        GenericListComponent,
        SummaryMetricComponent,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonCol,
        IonGrid,
        IonRow,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: {}, params: {}, queryParams: {} },
        },
      ],
    });

    cy.contains('VIP client - Last 5 reservations completed').should(
      'be.visible',
    );
    cy.contains('Frequent client - Member since 2023').should('be.visible');
    cy.contains('Corporate client - 15 registered employees').should(
      'be.visible',
    );
    cy.contains('New client - First reservation pending').should('be.visible');
    cy.contains('International client - 3 branches').should('be.visible');
  });
});
