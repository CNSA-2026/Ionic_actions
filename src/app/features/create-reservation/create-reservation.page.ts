import { Component } from '@angular/core';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonInput,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
  IonCol,
  IonSelect,
  IonSelectOption,
  IonIcon,
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonText,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  personOutline,
  peopleOutline,
  locationOutline,
  calendarOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.page.html',
  styleUrls: ['./create-reservation.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonTitle,
    IonToolbar,
    IonCol,
    IonSelect,
    IonSelectOption,
    IonIcon,
    IonCard,
    IonCardContent,
    IonGrid,
    IonRow,
    IonText,
  ],
})
export class CreateReservationPage {
  readonly locations = [
    { value: 'terrace', label: 'Terrace Garden' },
    { value: 'main', label: 'Main Dining Hall' },
    { value: 'bar', label: 'Cocktail Lounge' },
    { value: 'private', label: 'Private Room' },
  ];

  readonly reservationPreview = {
    customerName: 'John Perez',
    peopleCount: 4,
    preferredArea: 'Terrace Garden',
  };

  constructor() {
    addIcons({
      personOutline,
      peopleOutline,
      locationOutline,
      calendarOutline,
    });
  }
}
