import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDoParam} from "../../model/to-do-param";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input()
  compactMode: boolean;
  @Input()
  param: boolean;

  @Output()
  checkboxToggled = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleCheckbox() {
    this.checkboxToggled.emit();
  }
}
