import {Component, Input, OnInit} from '@angular/core';
import {ToDoList} from "../../model/to-do-list";
import {Sort} from "@angular/material/sort";
import {ToDoItem} from "../../model/to-do-item";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  @Input()
  list: ToDoList;
  displayedColumns: string[] = ['Done'];
  sortedList: ToDoItem[];

  constructor() {
    for (let p of this.list.parameters) {

    }

    this.sortedList = this.list.items.slice();

    console.log("sorted list");
    console.log(this.sortedList);
  }

  ngOnInit() {
  }

  sortData(sort: Sort) {

  }

}
