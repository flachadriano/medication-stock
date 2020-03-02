import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationFormComponent } from './medication-form.component';

describe('MedicationFormComponent', () => {
  let component: MedicationFormComponent;
  let fixture: ComponentFixture<MedicationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
