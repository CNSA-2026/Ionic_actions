import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { TabProductsPage } from './tabProducts.page';
import { GenericListComponent } from '../../../shared/components/generic-list/generic-list.component';
import { SummaryMetricComponent } from '../../../shared/components/summary-metric/summary-metric.component';

describe('TabProductsPage', () => {
  let component: TabProductsPage;
  let fixture: ComponentFixture<TabProductsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabProductsPage, GenericListComponent, SummaryMetricComponent],
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(TabProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
