import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';

import { TabsPage } from './tabs.page';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsPage],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render three tab buttons with correct tabs', () => {
    const tabButtons = fixture.debugElement.queryAll(By.css('ion-tab-button'));
    expect(tabButtons.length).toBe(3);
  });

  it('should render Clients tab with people icon and correct text', async () => {
    const clientsTab = fixture.debugElement.query(
      By.css('ion-tab-button[tab="tabClients"]'),
    );
    expect(clientsTab).toBeTruthy();
    expect(clientsTab.nativeElement.getAttribute('href')).toBe(
      '/tabs/tabClients',
    );

    const icon = clientsTab.query(By.css('ion-icon[name="people"]'));
    expect(icon).toBeTruthy();

    const label = clientsTab.query(By.css('ion-label'));
    await fixture.whenStable();
    fixture.detectChanges();
    expect(label.nativeElement.textContent).toContain('Clients');
  });

  it('should render Reservations tab with calendar-number icon and correct text', async () => {
    const reservationsTab = fixture.debugElement.query(
      By.css('ion-tab-button[tab="tabReservations"]'),
    );
    expect(reservationsTab).toBeTruthy();
    expect(reservationsTab.nativeElement.getAttribute('href')).toBe(
      '/tabs/tabReservations',
    );

    const icon = reservationsTab.query(
      By.css('ion-icon[name="calendar-number"]'),
    );
    expect(icon).toBeTruthy();

    const label = reservationsTab.query(By.css('ion-label'));
    await fixture.whenStable();
    fixture.detectChanges();
    expect(label.nativeElement.textContent).toContain('Reservations');
  });

  it('should render Products tab with pricetags icon and correct text', async () => {
    const productsTab = fixture.debugElement.query(
      By.css('ion-tab-button[tab="tabProducts"]'),
    );
    expect(productsTab).toBeTruthy();
    expect(productsTab.nativeElement.getAttribute('href')).toBe(
      '/tabs/tabProducts',
    );

    const icon = productsTab.query(By.css('ion-icon[name="pricetags"]'));
    expect(icon).toBeTruthy();

    const label = productsTab.query(By.css('ion-label'));
    await fixture.whenStable();
    fixture.detectChanges();
    expect(label.nativeElement.textContent).toContain('Products');
  });
});
