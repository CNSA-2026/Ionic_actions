import { Component, Input } from '@angular/core';
import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonChip,
  IonLabel,
  IonItem,
  IonList,
  IonIcon,
  IonRow,
  IonText,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.page.html',
  styleUrls: ['./detail-client.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonButtons,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonChip,
    IonLabel,
    IonItem,
    IonList,
    IonIcon,
    IonRow,
    IonText,
  ],
})
export class DetailClientPage {
  private readonly clientsById: Record<string, { name: string; tier: string }> =
    {
      '1': { name: 'John Perez', tier: 'VIP' },
      '2': { name: 'Mary Garcia', tier: 'Frequent' },
      '3': { name: 'Tech Solutions Company', tier: 'Corporate' },
      '4': { name: 'Charles Rodriguez', tier: 'New' },
      '5': { name: 'Global Inc.', tier: 'International' },
    };

  @Input({ required: true }) id = '';

  constructor() {
    addIcons({ personCircleOutline });
  }

  get client(): { name: string; tier: string } {
    return (
      this.clientsById[this.id] ?? { name: 'Client not found', tier: 'Unknown' }
    );
  }
}
