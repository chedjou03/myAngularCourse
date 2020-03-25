import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPersonListBoostrapComponent } from './sales-person-list-boostrap.component';

describe('SalesPersonListBoostrapComponent', () => {
  let component: SalesPersonListBoostrapComponent;
  let fixture: ComponentFixture<SalesPersonListBoostrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesPersonListBoostrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPersonListBoostrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
