import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCol,
  IonGrid,
  IonRow,
} from '@ionic/angular/standalone';
import {
  GenericListComponent,
  ListItem,
} from '../../../shared/components/generic-list/generic-list.component';
import { SummaryMetricComponent } from '../../../shared/components/summary-metric/summary-metric.component';
import { addIcons } from 'ionicons';
import { personCircle } from 'ionicons/icons';

@Component({
  selector: 'app-tab-clients',
  templateUrl: 'tabClients.page.html',
  styleUrls: ['tabClients.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCol,
    IonGrid,
    IonRow,
    GenericListComponent,
    SummaryMetricComponent,
  ],
})
export class TabClientsPage {
  readonly clients: ListItem[] = [
    {
      id: '1',
      name: 'John Perez',
      description: 'VIP client - Last 5 reservations completed',
    },
    {
      id: '2',
      name: 'Mary Garcia',
      description: 'Frequent client - Member since 2023',
    },
    {
      id: '3',
      name: 'Tech Solutions Company',
      description: 'Corporate client - 15 registered employees',
    },
    {
      id: '4',
      name: 'Charles Rodriguez',
      description: 'New client - First reservation pending',
    },
    {
      id: '5',
      name: 'Global Inc.',
      description: 'International client - 3 branches',
    },
  ];

  constructor() {
    addIcons({ personCircle });
  }
}
