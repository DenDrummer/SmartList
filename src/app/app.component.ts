import {Component, HostListener, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations'
import {ToDoList} from "../model/to-do-list";
import {TitleParam} from "../model/ParamTypes/title-param";
import {ImageParam} from "../model/ParamTypes/image-param";
import {TextParam} from "../model/ParamTypes/text-param";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('toggleOverlay', [
      state('overlayShown', style({})),
      state('overlayHidden', style({})),
      transition('* => *', [animate('1s')])
    ])
  ]
})
export class AppComponent implements OnInit {
  name = 'Listom';
  showOverlay = false;
  showSidebar = false;
  windowWidth: number;
  shownList: number = null;
  lists: ToDoList[] = [];

  ngOnInit(): void {
    this.windowWidth = window.innerWidth;
    this.createDefault();
  }

  private createDefault() {
    const list = new ToDoList("Test");

    list.addParam(new TitleParam("Title"));

    let item1 = list.createItem();
    list.items.push(item1);

    list.addParam(new ImageParam("Image"));

    let item2 = list.createItem();
    list.items.push(item2);

    list.addParam(new TextParam("Text"));
    let item3 = list.createItem();
    list.items.push(item3);

    this.lists.push(list);

    console.log("lists on init");
    console.log(this.lists);

    this.shownList = 0;
  }

  toggleOverlay() {
    this.showOverlay = !this.showOverlay;
  }

  @HostListener('window:resize')
  onResize() {
    this.windowWidth = window.innerWidth;
  }
}
