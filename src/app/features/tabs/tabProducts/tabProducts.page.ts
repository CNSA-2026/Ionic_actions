import { Component, inject } from '@angular/core';
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
  NavController,
} from '@ionic/angular/standalone';
import {
  GenericListComponent,
  ListItem,
} from '../../../shared/components/generic-list/generic-list.component';
import { SummaryMetricComponent } from '../../../shared/components/summary-metric/summary-metric.component';
import { addIcons } from 'ionicons';
import { pricetag, logOutOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab-products',
  templateUrl: 'tabProducts.page.html',
  styleUrls: ['tabProducts.page.scss'],
  imports: [
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
    GenericListComponent,
    SummaryMetricComponent,
  ],
})
export class TabProductsPage {
  private navCtrl = inject(NavController);

  readonly products: ListItem[] = [
    {
      id: 'p1',
      name: 'Executive Menu',
      description: 'Main course, drink, and dessert - $25.00',
    },
    {
      id: 'p2',
      name: 'Gourmet Coffee',
      description: 'Specialty coffee with milk - $5.50',
    },
    {
      id: 'p3',
      name: 'Special Pizza',
      description: 'Family-size pizza with premium ingredients - $18.00',
    },
    {
      id: 'p4',
      name: 'Premium Burger',
      description: 'Angus beef with fries - $15.00',
    },
    {
      id: 'p5',
      name: 'Glass of Wine',
      description: 'Selection of red and white wines - $12.00',
    },
  ];

  constructor() {
    addIcons({ pricetag, logOutOutline });
  }

  logout() {
    console.log('Logica de cierre de sesion...');
    this.navCtrl.navigateRoot('/login');
  }
}
