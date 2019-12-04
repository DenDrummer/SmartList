import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ToDoList} from "../../../model/to-do-list";
import {debug} from "util";

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent {
  @Input()
  list: ToDoList;
  @Input()
  selected: boolean;
}
