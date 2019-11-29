import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ToDoList} from "../../../model/to-do-list";

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit, OnChanges {
  @Input()
  list: ToDoList;
  donePercentage: number;

  constructor() {
  }

  ngOnInit() {
    this.calculateDonePercentage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.info("changes detected, recalculating percentage done...");
    this.calculateDonePercentage();
  }

  calculateDonePercentage() {
    if (this.list.items.length > 0) {
      const doneItems = this.list.items.filter(function (item) {
        return item.done.value;
      }).length;
      this.donePercentage = Math.round(doneItems / this.list.items.length * 1000) / 10;
    } else {
      this.donePercentage = 100;
    }
  }
}
