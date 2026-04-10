import { mount } from '@cypress/angular';
import { TabReservationsPage } from './tabReservations.page';
import { GenericListComponent } from '../../../shared/components/generic-list/generic-list.component';
import { SummaryMetricComponent } from '../../../shared/components/summary-metric/summary-metric.component';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonCol,
  IonIcon,
  IonGrid,
  IonRow,
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';

describe('TabReservationsPage Component', () => {
  it('should render with correct title', () => {
    mount(TabReservationsPage, {
      imports: [
        TabReservationsPage,
        GenericListComponent,
        SummaryMetricComponent,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonButton,
        IonButtons,
        IonCol,
        IonIcon,
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

    cy.get('ion-title').should('contain', 'Reservations');
  });

  it('should render SummaryMetricComponent', () => {
    mount(TabReservationsPage, {
      imports: [
        TabReservationsPage,
        GenericListComponent,
        SummaryMetricComponent,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonButton,
        IonButtons,
        IonCol,
        IonIcon,
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

  it('should render GenericListComponent with reservations', () => {
    mount(TabReservationsPage, {
      imports: [
        TabReservationsPage,
        GenericListComponent,
        SummaryMetricComponent,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonButton,
        IonButtons,
        IonCol,
        IonIcon,
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

  it('should display correct number of reservation items', () => {
    mount(TabReservationsPage, {
      imports: [
        TabReservationsPage,
        GenericListComponent,
        SummaryMetricComponent,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonButton,
        IonButtons,
        IonCol,
        IonIcon,
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

  it('should display reservation IDs in the list', () => {
    mount(TabReservationsPage, {
      imports: [
        TabReservationsPage,
        GenericListComponent,
        SummaryMetricComponent,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonButton,
        IonButtons,
        IonCol,
        IonIcon,
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

    cy.contains('Reservation #001').should('be.visible');
    cy.contains('Reservation #002').should('be.visible');
    cy.contains('Reservation #003').should('be.visible');
    cy.contains('Reservation #004').should('be.visible');
    cy.contains('Reservation #005').should('be.visible');
  });

  it('should display reservation details in the list', () => {
    mount(TabReservationsPage, {
      imports: [
        TabReservationsPage,
        GenericListComponent,
        SummaryMetricComponent,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonButton,
        IonButtons,
        IonCol,
        IonIcon,
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

    cy.contains('Confirmed - John Perez - Table for 4 people').should(
      'be.visible',
    );
    cy.contains('Pending - Mary Garcia - Event hall').should('be.visible');
    cy.contains('Canceled - Charles Rodriguez - Table for 2 people').should(
      'be.visible',
    );
    cy.contains('Confirmed - Tech Solutions - Meeting room').should(
      'be.visible',
    );
    cy.contains('On hold - Global Inc. - Table for 8 people').should(
      'be.visible',
    );
  });

  it('should render create reservation button', () => {
    mount(TabReservationsPage, {
      imports: [
        TabReservationsPage,
        GenericListComponent,
        SummaryMetricComponent,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonButton,
        IonButtons,
        IonCol,
        IonIcon,
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

    cy.get('ion-button')
      .find('ion-icon[name="add-circle-outline"]')
      .parents('ion-button')
      .should('exist');
  });
});
