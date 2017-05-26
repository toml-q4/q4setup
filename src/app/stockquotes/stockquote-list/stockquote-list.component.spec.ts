import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockquoteListComponent } from './stockquote-list.component';

describe('StockquoteListComponent', () => {
  let component: StockquoteListComponent;
  let fixture: ComponentFixture<StockquoteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockquoteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockquoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
