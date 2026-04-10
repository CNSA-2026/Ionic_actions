import { Component, input } from '@angular/core';
import { IonCard, IonCardContent, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-summary-metric',
  templateUrl: './summary-metric.component.html',
  styleUrls: ['./summary-metric.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardContent, IonText],
})
export class SummaryMetricComponent {
  label = input.required<string>();
  value = input.required<string | number>();
}
