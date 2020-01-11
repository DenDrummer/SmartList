import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDoParam} from "../../../model/to-do-param";
import {CheckBoxParam} from "../../../model/ParamTypes/check-box-param";

@Component({
  selector: 'app-param-cell',
  templateUrl: './param-cell.component.html',
  styleUrls: ['./param-cell.component.scss']
})
export class ParamCellComponent implements OnInit {
  @Input()
  compactMode: boolean;
  @Input()
  param: ToDoParam;

  @Output()
  checkboxToggled = new EventEmitter<ToDoParam>();

  constructor() {
  }

  ngOnInit() {
  }

  toggleCheckbox() {
    this.checkboxToggled.emit(this.param);
  }
}
