import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { TabClientsPage } from './tabClients.page';
import { GenericListComponent } from '../../../shared/components/generic-list/generic-list.component';
import { SummaryMetricComponent } from '../../../shared/components/summary-metric/summary-metric.component';

describe('TabClientsPage', () => {
  let component: TabClientsPage;
  let fixture: ComponentFixture<TabClientsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabClientsPage, GenericListComponent, SummaryMetricComponent],
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(TabClientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
