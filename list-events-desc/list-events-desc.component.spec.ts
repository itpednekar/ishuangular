import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEventsDescComponent } from './list-events-desc.component';

describe('ListEventsDescComponent', () => {
  let component: ListEventsDescComponent;
  let fixture: ComponentFixture<ListEventsDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEventsDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEventsDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
