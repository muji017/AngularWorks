import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntPhoneComponent } from './int-phone.component';

describe('IntPhoneComponent', () => {
  let component: IntPhoneComponent;
  let fixture: ComponentFixture<IntPhoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntPhoneComponent]
    });
    fixture = TestBed.createComponent(IntPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
