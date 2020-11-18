import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTrackinglistComponent } from './product-trackinglist.component';

describe('ProductTrackinglistComponent', () => {
  let component: ProductTrackinglistComponent;
  let fixture: ComponentFixture<ProductTrackinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTrackinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTrackinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
