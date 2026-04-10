import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabClientsPage } from './tabClients.page';

describe('TabClientsPage', () => {
  let component: TabClientsPage;
  let fixture: ComponentFixture<TabClientsPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(TabClientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
