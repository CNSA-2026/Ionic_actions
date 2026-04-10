import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabProductsPage } from './tabProducts.page';

describe('TabProductsPage', () => {
  let component: TabProductsPage;
  let fixture: ComponentFixture<TabProductsPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(TabProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
