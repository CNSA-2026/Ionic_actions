import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CreateReservationPage } from './create-reservation.page';

describe('CreateReservationPage', () => {
  let component: CreateReservationPage;
  let fixture: ComponentFixture<CreateReservationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReservationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render page with create reservation title', () => {
    const title = fixture.debugElement.query(By.css('ion-title'));
    expect(title).toBeTruthy();
    expect(title.nativeElement.textContent).toContain('Create Reservation');
  });

  it('should render a back button', () => {
    const backButton = fixture.debugElement.query(By.css('ion-back-button'));
    expect(backButton).toBeTruthy();
  });

  it('should have back button with defaultHref pointing to reservations', () => {
    const backButton = fixture.debugElement.query(By.css('ion-back-button'));
    expect(backButton).toBeTruthy();
    const href = backButton.nativeElement.getAttribute('defaultHref');
    expect(href).toBe('/tabs/tabReservations');
  });
});
