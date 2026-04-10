import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';
import { TabReservationsPage } from './tabReservations.page';
import { GenericListComponent } from '../../../shared/components/generic-list/generic-list.component';
import { SummaryMetricComponent } from '../../../shared/components/summary-metric/summary-metric.component';
import { NavController } from '@ionic/angular/standalone';

describe('TabReservationsPage', () => {
  let component: TabReservationsPage;
  let fixture: ComponentFixture<TabReservationsPage>;
  let navCtrl: jasmine.SpyObj<NavController>;

  beforeEach(async () => {
    const navCtrlSpy = jasmine.createSpyObj('NavController', [
      'navigateForward',
    ]);

    await TestBed.configureTestingModule({
      imports: [
        TabReservationsPage,
        GenericListComponent,
        SummaryMetricComponent,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: {} },
        { provide: NavController, useValue: navCtrlSpy },
      ],
    }).compileComponents();

    navCtrl = TestBed.inject(NavController) as jasmine.SpyObj<NavController>;
    fixture = TestBed.createComponent(TabReservationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render correct header title', () => {
    const header = fixture.debugElement.query(By.css('ion-title'));
    expect(header).toBeTruthy();
    expect(header.nativeElement.textContent).toContain('Reservations');
  });

  it('should have five reservations in the list', () => {
    expect(component.reservations.length).toBe(5);
  });

  it('should have correct reservation IDs', () => {
    const reservationIds = component.reservations.map((r) => r.id);
    expect(reservationIds).toEqual(['001', '002', '003', '004', '005']);
  });

  it('should render correct reservation descriptions in the list', () => {
    const reservationDescriptions = component.reservations.map(
      (r) => r.description,
    );
    expect(reservationDescriptions).toContain(
      'Confirmed - John Perez - Table for 4 people',
    );
    expect(reservationDescriptions).toContain(
      'Pending - Mary Garcia - Event hall',
    );
    expect(reservationDescriptions).toContain(
      'Canceled - Charles Rodriguez - Table for 2 people',
    );
    expect(reservationDescriptions).toContain(
      'Confirmed - Tech Solutions - Meeting room',
    );
    expect(reservationDescriptions).toContain(
      'On hold - Global Inc. - Table for 8 people',
    );
  });

  it('should have goToCreateReservation method', () => {
    expect(component.goToCreateReservation).toBeDefined();
  });

  it('should navigate forward to create-reservation when calling goToCreateReservation', () => {
    component.goToCreateReservation();
    expect(navCtrl.navigateForward).toHaveBeenCalledWith('/create-reservation');
  });

  it('should render SummaryMetricComponent', () => {
    const summaryMetric = fixture.debugElement.query(
      By.directive(SummaryMetricComponent),
    );
    expect(summaryMetric).toBeTruthy();
  });

  it('should render GenericListComponent', () => {
    const genericList = fixture.debugElement.query(
      By.directive(GenericListComponent),
    );
    expect(genericList).toBeTruthy();
  });
});
