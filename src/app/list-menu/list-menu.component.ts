import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDoList} from "../../model/to-do-list";

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss']
})
export class ListMenuComponent implements OnInit {

  @Input()
  list: ToDoList;

  @Output()
  listEditCanceled = new EventEmitter<ToDoList>();
  @Output()
  listEditConfirmed = new EventEmitter<ToDoList>();

  constructor() { }

  ngOnInit() {
  }

}
