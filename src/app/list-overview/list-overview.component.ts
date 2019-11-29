import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDoList} from "../../model/to-do-list";

@Component({
  selector: 'app-list-overview',
  templateUrl: './list-overview.component.html',
  styleUrls: ['./list-overview.component.scss']
})
export class ListOverviewComponent implements OnInit {
  @Input()
  lists: ToDoList[];
  @Output()
  listSelected = new EventEmitter<number>();
  @Input()
  selectedList = 0;


  constructor() {
  }

  ngOnInit() {
  }

  select(list: number) {
    console.debug("opening list " + list);
    console.debug("selected list " + this.selectedList);
    if (list !== this.selectedList) {
      this.listSelected.emit(list);
    }
  }
}
