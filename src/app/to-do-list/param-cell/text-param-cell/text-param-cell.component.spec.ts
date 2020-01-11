import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextParamCellComponent } from './text-param-cell.component';

describe('TextParamCellComponent', () => {
  let component: TextParamCellComponent;
  let fixture: ComponentFixture<TextParamCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextParamCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextParamCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
