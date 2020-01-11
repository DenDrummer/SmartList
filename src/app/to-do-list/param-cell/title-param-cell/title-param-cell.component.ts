import {Component, Input, OnInit} from '@angular/core';
import {ToDoParam} from "../../../../model/to-do-param";

@Component({
  selector: 'app-title-param-cell',
  templateUrl: './title-param-cell.component.html',
  styleUrls: ['./title-param-cell.component.scss']
})
export class TitleParamCellComponent implements OnInit {
  @Input()
  compactMode: boolean;
  @Input()
  param: ToDoParam;

  constructor() { }

  ngOnInit() {
  }

}
