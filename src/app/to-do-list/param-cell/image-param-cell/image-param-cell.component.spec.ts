import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageParamCellComponent } from './image-param-cell.component';

describe('ImageParamCellComponent', () => {
  let component: ImageParamCellComponent;
  let fixture: ComponentFixture<ImageParamCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageParamCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageParamCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
