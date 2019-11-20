import {Component, OnInit} from '@angular/core';
import {ToDoList} from "../../model/to-do-list";
import {TitleParam} from "../../model/ParamTypes/title-param";
import {TextParam} from "../../model/ParamTypes/text-param";
import {ImageParam} from "../../model/ParamTypes/image-param";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  list: ToDoList;

  constructor() {
    this.list = new ToDoList();

    this.list.addParam(new TitleParam("Title"));

    let id = 0;
    let item1 = this.list.createItem(id);
    this.list.items.push(item1);

    this.list.addParam(new ImageParam("Image"));

    id++;
    let item2 = this.list.createItem(id);
    this.list.items.push(item2);

    this.list.addParam(new TextParam("Text"));

    id++;
    let item3 = this.list.createItem(id);
    this.list.items.push(item3);

    console.log("list on init:");
    console.log(this.list);
  }

  ngOnInit() {
  }

}
