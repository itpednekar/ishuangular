import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertVenueComponent } from './insert-venue.component';

describe('InsertVenueComponent', () => {
  let component: InsertVenueComponent;
  let fixture: ComponentFixture<InsertVenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertVenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
