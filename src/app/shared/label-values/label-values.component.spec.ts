import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelValuesComponent } from './label-values.component';

describe('LabelValuesComponent', () => {
  let component: LabelValuesComponent;
  let fixture: ComponentFixture<LabelValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
