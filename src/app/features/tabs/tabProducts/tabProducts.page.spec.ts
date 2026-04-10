import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';
import { TabProductsPage } from './tabProducts.page';
import { GenericListComponent } from '../../../shared/components/generic-list/generic-list.component';
import { SummaryMetricComponent } from '../../../shared/components/summary-metric/summary-metric.component';
import { NavController } from '@ionic/angular/standalone';

describe('TabProductsPage', () => {
  let component: TabProductsPage;
  let fixture: ComponentFixture<TabProductsPage>;
  let navCtrl: jasmine.SpyObj<NavController>;

  beforeEach(async () => {
    const navCtrlSpy = jasmine.createSpyObj('NavController', ['navigateRoot']);

    await TestBed.configureTestingModule({
      imports: [TabProductsPage, GenericListComponent, SummaryMetricComponent],
      providers: [
        { provide: ActivatedRoute, useValue: {} },
        { provide: NavController, useValue: navCtrlSpy },
      ],
    }).compileComponents();

    navCtrl = TestBed.inject(NavController) as jasmine.SpyObj<NavController>;
    fixture = TestBed.createComponent(TabProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render correct header title', () => {
    const header = fixture.debugElement.query(By.css('ion-title'));
    expect(header).toBeTruthy();
    expect(header.nativeElement.textContent).toContain('Products');
  });

  it('should have five products in the list', () => {
    expect(component.products.length).toBe(5);
  });

  it('should have correct product names', () => {
    const productNames = component.products.map((p) => p.name);
    expect(productNames).toContain('Executive Menu');
    expect(productNames).toContain('Gourmet Coffee');
    expect(productNames).toContain('Special Pizza');
    expect(productNames).toContain('Premium Burger');
    expect(productNames).toContain('Glass of Wine');
  });

  it('should have correct product descriptions', () => {
    const productDescriptions = component.products.map((p) => p.description);
    expect(productDescriptions).toContain(
      'Main course, drink, and dessert - $25.00',
    );
    expect(productDescriptions).toContain('Specialty coffee with milk - $5.50');
    expect(productDescriptions).toContain(
      'Family-size pizza with premium ingredients - $18.00',
    );
    expect(productDescriptions).toContain('Angus beef with fries - $15.00');
    expect(productDescriptions).toContain(
      'Selection of red and white wines - $12.00',
    );
  });

  it('should have logout method', () => {
    expect(component.logout).toBeDefined();
  });

  it('should navigate root to login when calling logout', () => {
    component.logout();
    expect(navCtrl.navigateRoot).toHaveBeenCalledWith('/login');
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
