import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVenueCityComponent } from './list-venue-city.component';

describe('ListVenueCityComponent', () => {
  let component: ListVenueCityComponent;
  let fixture: ComponentFixture<ListVenueCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVenueCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVenueCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
