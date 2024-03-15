import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorWidgComponent } from './error-widg.component';

describe('ErrorWidgComponent', () => {
  let component: ErrorWidgComponent;
  let fixture: ComponentFixture<ErrorWidgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorWidgComponent]
    });
    fixture = TestBed.createComponent(ErrorWidgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
