import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ToDoList} from "../../model/to-do-list";
import {Sort} from "@angular/material/sort";
import {ToDoItem} from "../../model/to-do-item";
import {ScrollDispatcher} from "@angular/cdk/scrolling";

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
  displayedColumns: string[] = ['Done'];
  sortedList: ToDoItem[];

  ngOnInit() {
    this.sortedList = this.list.items.slice();

    console.debug("sorted list");
    console.debug(this.sortedList);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.info("changes detected... sorting");
    this.sortedList = this.list.items.slice();
  }

  sortData(sort: Sort) {
    console.info("sorting by " + sort.active + " " + sort.direction);
    const data = this.list.items.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedList = data;
      console.info("list sorted");
      console.debug(this.sortedList);
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

  checkDone(item: ToDoItem, event) {
    console.debug("itemIndex: " + item);
    item.done.value = event.target.checked;
  }

  compareItem(a: ToDoItem, b: ToDoItem, isAsc: boolean, sorter: string) {
    if (a.findParam(sorter).value < b.findParam(sorter).value) {
      return -1 * (isAsc ? 1 : -1);
    } else {
      if (a.findParam(sorter).value > b.findParam(sorter).value) {
        return 1 * (isAsc ? 1 : -1);
      } else {
        return 0;
      }
    }
  }

  checkCheckbox(itemIndex: number, paramIndex: number, event) {
    this.list.items[itemIndex].parameters[paramIndex].value = event.target.checked;
  }

  openListConfig() {
    this.listConfigOpened.emit(this.list);
  }

  toggleCompactMode() {
    this.compactModeToggled.emit();
  }

  addItem() {
    this.itemCreated.emit(this.list);
  }

  deleteItem(item: ToDoItem) {
    //TODO: deleteItem()
    console.error("Not implemented yet");
  }
}
