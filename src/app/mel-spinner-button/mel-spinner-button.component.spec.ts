import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelSpinnerButtonComponent } from './mel-spinner-button.component';

describe('MelSpinnerButtonComponent', () => {
  let component: MelSpinnerButtonComponent;
  let fixture: ComponentFixture<MelSpinnerButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelSpinnerButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelSpinnerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
