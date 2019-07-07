import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCustomerPositionComponent } from './single-customer-position.component';

describe('SingleCustomerPositionComponent', () => {
  let component: SingleCustomerPositionComponent;
  let fixture: ComponentFixture<SingleCustomerPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCustomerPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCustomerPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
