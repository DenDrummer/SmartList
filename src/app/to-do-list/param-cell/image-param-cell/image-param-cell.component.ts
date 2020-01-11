import {Component, Input, OnInit} from '@angular/core';
import {ToDoParam} from "../../../../model/to-do-param";

@Component({
  selector: 'app-image-param-cell',
  templateUrl: './image-param-cell.component.html',
  styleUrls: ['./image-param-cell.component.scss']
})
export class ImageParamCellComponent implements OnInit {
  @Input()
  compactMode: boolean;
  @Input()
  param: ToDoParam;

  constructor() { }

  ngOnInit() {
  }

}
