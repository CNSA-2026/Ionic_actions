import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonNote,
  IonText,
} from '@ionic/angular/standalone';

//Elemento: Nombre y descripcion
export interface ListItem {
  id?: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.scss'],
  imports: [IonList, IonItem, IonLabel, IonIcon, IonNote, IonText, RouterLink],
})

//Lista: Elemento + icono general
export class GenericListComponent {
  items = input.required<ListItem[]>();
  icon = input.required<string>();
  linkPrefix = input<string>();
}
