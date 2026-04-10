import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { TabReservationsPage } from './tabReservations.page';
import { GenericListComponent } from '../../../shared/components/generic-list/generic-list.component';
import { SummaryMetricComponent } from '../../../shared/components/summary-metric/summary-metric.component';

describe('TabReservationsPage', () => {
  let component: TabReservationsPage;
  let fixture: ComponentFixture<TabReservationsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TabReservationsPage,
        GenericListComponent,
        SummaryMetricComponent,
      ],
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(TabReservationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
