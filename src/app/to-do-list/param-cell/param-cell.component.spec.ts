import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamCellComponent } from './param-cell.component';

describe('ParamCellComponent', () => {
  let component: ParamCellComponent;
  let fixture: ComponentFixture<ParamCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
