import { Component, inject } from '@angular/core';
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  NavController,
  IonTitle,
  IonToolbar,
  IonList,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardContent,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  logInOutline,
  mailOutline,
  lockClosedOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonList,
    IonInput,
    IonItem,
    IonLabel,
    IonRow,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardContent,
  ],
})
export class LoginPage {
  private navCtrl = inject(NavController);

  constructor() {
    addIcons({
      arrowBackOutline,
      logInOutline,
      mailOutline,
      lockClosedOutline,
    });
  }

  login(): void {
    this.navCtrl.navigateRoot('/');
  }
}
