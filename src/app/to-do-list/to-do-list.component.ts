import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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

  checkDone(index: number, event) {
    console.debug("itemIndex: " + index);
    this.list.items[index].done.value = event.target.checked;
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
}
