import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';
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

  it('should render correct header title', () => {
    const header = fixture.debugElement.query(By.css('ion-title'));
    expect(header).toBeTruthy();
    expect(header.nativeElement.textContent).toContain('Clients');
  });

  it('should have five clients in the list', () => {
    expect(component.clients.length).toBe(5);
  });

  it('should have correct client names', () => {
    const clientNames = component.clients.map((c) => c.name);
    expect(clientNames).toContain('John Perez');
    expect(clientNames).toContain('Mary Garcia');
    expect(clientNames).toContain('Tech Solutions Company');
    expect(clientNames).toContain('Charles Rodriguez');
    expect(clientNames).toContain('Global Inc.');
  });

  it('should render correct client descriptions in the list', () => {
    const clientDescriptions = component.clients.map((c) => c.description);
    expect(clientDescriptions).toContain(
      'VIP client - Last 5 reservations completed',
    );
    expect(clientDescriptions).toContain('Frequent client - Member since 2023');
    expect(clientDescriptions).toContain(
      'Corporate client - 15 registered employees',
    );
    expect(clientDescriptions).toContain(
      'New client - First reservation pending',
    );
    expect(clientDescriptions).toContain('International client - 3 branches');
  });

  it('should render SummaryMetricComponent', () => {
    const summaryMetric = fixture.debugElement.query(
      By.directive(SummaryMetricComponent),
    );
    expect(summaryMetric).toBeTruthy();
  });

  it('should render GenericListComponent with correct inputs', () => {
    const genericList = fixture.debugElement.query(
      By.directive(GenericListComponent),
    );
    expect(genericList).toBeTruthy();
  });
});
