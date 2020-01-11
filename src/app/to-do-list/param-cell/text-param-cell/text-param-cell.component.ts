import {Component, Input, OnInit} from '@angular/core';
import {ToDoParam} from "../../../../model/to-do-param";
import {TextParam} from "../../../../model/ParamTypes/text-param";

@Component({
  selector: 'app-text-param-cell',
  templateUrl: './text-param-cell.component.html',
  styleUrls: ['./text-param-cell.component.scss']
})
export class TextParamCellComponent implements OnInit {
  @Input()
  compactMode: boolean;
  @Input()
  param: TextParam;

  constructor() {
  }

  ngOnInit() {
  }

}
