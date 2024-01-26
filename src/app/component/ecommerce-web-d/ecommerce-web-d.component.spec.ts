import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceWebDComponent } from './ecommerce-web-d.component';

describe('EcommerceWebDComponent', () => {
  let component: EcommerceWebDComponent;
  let fixture: ComponentFixture<EcommerceWebDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcommerceWebDComponent]
    });
    fixture = TestBed.createComponent(EcommerceWebDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
