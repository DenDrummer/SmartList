import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDoList} from "../../model/to-do-list";
import {ToDoParam} from "../../model/to-do-param";

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss']
})
export class ListMenuComponent implements OnInit {

  @Input()
  list: ToDoList;
  @Input()
  newList: boolean;

  @Output()
  listEditCanceled = new EventEmitter<ToDoList>();
  @Output()
  listEditConfirmed = new EventEmitter<ToDoList>();
  @Output()
  listCreated = new EventEmitter<ToDoList>();

  constructor() {
  }

  ngOnInit() {
  }

  cancel() {
    this.listEditCanceled.emit(this.list)
  }

  removeParam(param: ToDoParam) {
    this.list.removeParam(param);
  }

  createList() {
    this.listCreated.emit();
  }

  moveDown(param: ToDoParam) {
    let index: number = this.list.parameters.findIndex((p) => p === param);
    this.list.swapParams(index, index + 1);
  }

  moveUp(param: ToDoParam) {
    let index: number = this.list.parameters.findIndex((p) => p === param);
    this.list.swapParams(index, index - 1);
  }

  updateParamName(param: ToDoParam) {
    let index: number = this.list.parameters.findIndex((p) => p === param);
    for (let item of this.list.items) {
      item.parameters[index].name = param.name;
    }
  }

  openParameterMenu() {

  }
}
