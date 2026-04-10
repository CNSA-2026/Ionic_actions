import { mount } from '@cypress/angular';
import { TabProductsPage } from './tabProducts.page';
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

describe('TabProductsPage Component', () => {
  it('should render with correct title', () => {
    mount(TabProductsPage, {
      imports: [
        TabProductsPage,
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

    cy.get('ion-title').should('contain', 'Products');
  });

  it('should render SummaryMetricComponent', () => {
    mount(TabProductsPage, {
      imports: [
        TabProductsPage,
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

  it('should render GenericListComponent with products', () => {
    mount(TabProductsPage, {
      imports: [
        TabProductsPage,
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

  it('should display correct number of product items', () => {
    mount(TabProductsPage, {
      imports: [
        TabProductsPage,
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

  it('should display product names in the list', () => {
    mount(TabProductsPage, {
      imports: [
        TabProductsPage,
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

    cy.contains('Executive Menu').should('be.visible');
    cy.contains('Gourmet Coffee').should('be.visible');
    cy.contains('Special Pizza').should('be.visible');
    cy.contains('Premium Burger').should('be.visible');
    cy.contains('Glass of Wine').should('be.visible');
  });

  it('should display product descriptions in the list', () => {
    mount(TabProductsPage, {
      imports: [
        TabProductsPage,
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

    cy.contains('Main course, drink, and dessert - $25.00').should(
      'be.visible',
    );
    cy.contains('Specialty coffee with milk - $5.50').should('be.visible');
    cy.contains('Family-size pizza with premium ingredients - $18.00').should(
      'be.visible',
    );
    cy.contains('Angus beef with fries - $15.00').should('be.visible');
    cy.contains('Selection of red and white wines - $12.00').should(
      'be.visible',
    );
  });

  it('should render logout button', () => {
    mount(TabProductsPage, {
      imports: [
        TabProductsPage,
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

    cy.get('ion-button').contains('Log out').should('exist');
  });
});
