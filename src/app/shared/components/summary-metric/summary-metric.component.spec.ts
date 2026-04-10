import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SummaryMetricComponent } from './summary-metric.component';
describe('SummaryMetricComponent', () => {
  let component: SummaryMetricComponent;
  let fixture: ComponentFixture<SummaryMetricComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SummaryMetricComponent, IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(SummaryMetricComponent);
    component = fixture.componentInstance;
    // Provide required @Input values using setInput (Angular Signals)
    fixture.componentRef.setInput('label', 'Test');
    fixture.componentRef.setInput('value', 0);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
