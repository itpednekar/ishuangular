import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientfeedbackComponent } from './clientfeedback.component';

describe('ClientfeedbackComponent', () => {
  let component: ClientfeedbackComponent;
  let fixture: ComponentFixture<ClientfeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientfeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
