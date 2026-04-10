import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DetailClientPage } from './detail-client.page';

describe('DetailClientPage', () => {
  let component: DetailClientPage;
  let fixture: ComponentFixture<DetailClientPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailClientPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept id as Input', () => {
    component.id = '1';
    fixture.detectChanges();
    expect(component.id).toBe('1');
  });

  it('should return correct client when id is 1', () => {
    component.id = '1';
    fixture.detectChanges();
    expect(component.client.name).toBe('John Perez');
    expect(component.client.tier).toBe('VIP');
  });

  it('should return correct client when id is 2', () => {
    component.id = '2';
    fixture.detectChanges();
    expect(component.client.name).toBe('Mary Garcia');
    expect(component.client.tier).toBe('Frequent');
  });

  it('should return correct client when id is 3', () => {
    component.id = '3';
    fixture.detectChanges();
    expect(component.client.name).toBe('Tech Solutions Company');
    expect(component.client.tier).toBe('Corporate');
  });

  it('should return correct client when id is 4', () => {
    component.id = '4';
    fixture.detectChanges();
    expect(component.client.name).toBe('Charles Rodriguez');
    expect(component.client.tier).toBe('New');
  });

  it('should return correct client when id is 5', () => {
    component.id = '5';
    fixture.detectChanges();
    expect(component.client.name).toBe('Global Inc.');
    expect(component.client.tier).toBe('International');
  });

  it('should return unknown client when id is invalid', () => {
    component.id = '999';
    fixture.detectChanges();
    expect(component.client.name).toBe('Client not found');
    expect(component.client.tier).toBe('Unknown');
  });

  it('should render client name in ion-card-title', () => {
    component.id = '1';
    fixture.detectChanges();
    const title = fixture.debugElement.query(By.css('ion-card-title'));
    expect(title.nativeElement.textContent).toContain('John Perez');
  });

  it('should render back button with defaultHref', () => {
    fixture.detectChanges();
    const backButton = fixture.debugElement.query(By.css('ion-back-button'));
    expect(backButton).toBeTruthy();
    expect(backButton.nativeElement.getAttribute('defaultHref')).toBe(
      '/tabs/tabClients',
    );
  });
});
