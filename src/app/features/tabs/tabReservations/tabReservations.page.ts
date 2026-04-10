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
import { calendarOutline, addCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab-reservations',
  templateUrl: 'tabReservations.page.html',
  styleUrls: ['tabReservations.page.scss'],
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
export class TabReservationsPage {
  private navCtrl = inject(NavController);

  readonly reservations: ListItem[] = [
    {
      id: '001',
      name: 'Reservation #001',
      description: 'Confirmed - John Perez - Table for 4 people',
    },
    {
      id: '002',
      name: 'Reservation #002',
      description: 'Pending - Mary Garcia - Event hall',
    },
    {
      id: '003',
      name: 'Reservation #003',
      description: 'Canceled - Charles Rodriguez - Table for 2 people',
    },
    {
      id: '004',
      name: 'Reservation #004',
      description: 'Confirmed - Tech Solutions - Meeting room',
    },
    {
      id: '005',
      name: 'Reservation #005',
      description: 'On hold - Global Inc. - Table for 8 people',
    },
  ];

  constructor() {
    addIcons({ calendarOutline, addCircleOutline });
  }

  goToCreateReservation() {
    this.navCtrl.navigateForward('/create-reservation');
  }
}
