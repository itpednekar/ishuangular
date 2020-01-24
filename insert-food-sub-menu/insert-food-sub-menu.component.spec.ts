import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertFoodSubMenuComponent } from './insert-food-sub-menu.component';

describe('InsertFoodSubMenuComponent', () => {
  let component: InsertFoodSubMenuComponent;
  let fixture: ComponentFixture<InsertFoodSubMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertFoodSubMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertFoodSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
