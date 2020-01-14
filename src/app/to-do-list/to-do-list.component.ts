import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ToDoList} from "../../model/to-do-list";
import {Sort} from "@angular/material/sort";
import {ToDoItem} from "../../model/to-do-item";
import {ToDoParam} from "../../model/to-do-param";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit, OnChanges {
  @Input()
  list: ToDoList;
  @Input()
  compactMode: boolean;

  @Output()
  compactModeToggled = new EventEmitter();
  @Output()
  listConfigOpened = new EventEmitter<ToDoList>();
  @Output()
  itemCreated = new EventEmitter<ToDoList>();
  @Output()
  itemDeleted = new EventEmitter<ToDoItem>();
  @Output()
  paramValueUpdated = new EventEmitter();

  displayedColumns: string[] = ['Done'];
  sortedList: ToDoItem[];

  ngOnInit() {
    this.loadList();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadList();
  }

  sortData(sort: Sort) {
    const data = this.list.items.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedList = data;
      return;
    }

    this.sortedList = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      if (sort.active === "Done") {
        return this.compareBoolean(a.done.value, b.done.value, isAsc)
      } else if (this.list.parameters.find((p) => {
        return p.name === sort.active;
      })) {
        return this.compareItem(a, b, isAsc, sort.active);
      } else {
        return 0;
      }
    });
    console.info("list sorted");
    console.debug(this.sortedList);
  }

  compareBoolean(a: boolean, b: boolean, isAsc) {
    return (a === b) ? 0 : ((a ? -1 : 1) * (isAsc ? 1 : -1));
  }

  toggleDone(item: ToDoItem) {
    this.toggleCheckbox(item.done)
  }

  compareItem(a: ToDoItem, b: ToDoItem, isAsc: boolean, sorter: string) {
    const paramA = a.findParam(sorter);
    const paramB = b.findParam(sorter);

    if (paramA.type == "Title" || paramA.type == "Text") {
      const valA: string = paramA.value.toLowerCase();
      const valB: string = paramB.value.toLowerCase();

      if (valA < valB) {
        return -1 * (isAsc ? 1 : -1);
      } else {
        if (valA > valB) {
          return 1 * (isAsc ? 1 : -1);
        } else {
          return 0;
        }
      }
    } else {
      const valA = paramA.value;
      const valB = paramB.value;

      if (valA < valB) {
        return -1 * (isAsc ? 1 : -1);
      } else {
        if (valA > valB) {
          return 1 * (isAsc ? 1 : -1);
        } else {
          return 0;
        }
      }
    }
  }

  toggleCheckbox(event: ToDoParam) {
    const item = {
      "param": event,
      "value": !event.value
    };
    this.paramValueUpdated.emit(item);
    //this.list.items[itemIndex].parameters[paramIndex].value = event.target.checked;
  }

  openListConfig() {
    this.listConfigOpened.emit(this.list);
  }

  toggleCompactMode() {
    this.compactModeToggled.emit();
  }

  addItem() {
    this.itemCreated.emit(this.list);
    this.loadList();
  }

  deleteItem(item: ToDoItem) {
    //this.itemDeleted.emit(item);
    this.list.items.splice(
      this.list.items.findIndex(i => {
        return i === item;
      }), 1);
    this.loadList();
  }

  private loadList() {
    this.sortedList = this.list.items.slice();

  }
}
