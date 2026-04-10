import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailClientPage } from './detail-client.page';

describe('DetailClientPage', () => {
  let component: DetailClientPage;
  let fixture: ComponentFixture<DetailClientPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
