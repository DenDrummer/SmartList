import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleParamCellComponent } from './title-param-cell.component';

describe('TitleParamCellComponent', () => {
  let component: TitleParamCellComponent;
  let fixture: ComponentFixture<TitleParamCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleParamCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleParamCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
