import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFoodSubMenuComponent } from './list-food-sub-menu.component';

describe('ListFoodSubMenuComponent', () => {
  let component: ListFoodSubMenuComponent;
  let fixture: ComponentFixture<ListFoodSubMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFoodSubMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFoodSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
