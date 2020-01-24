import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFoodSubMenuComponent } from './delete-food-sub-menu.component';

describe('DeleteFoodSubMenuComponent', () => {
  let component: DeleteFoodSubMenuComponent;
  let fixture: ComponentFixture<DeleteFoodSubMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFoodSubMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFoodSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
