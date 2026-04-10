import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabReservationsPage } from './tabReservations.page';

describe('TabReservationsPage', () => {
  let component: TabReservationsPage;
  let fixture: ComponentFixture<TabReservationsPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(TabReservationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
