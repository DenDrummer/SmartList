import {Component, HostListener, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations'
import {ToDoList} from "../model/to-do-list";
import {TitleParam} from "../model/ParamTypes/title-param";
import {ImageParam} from "../model/ParamTypes/image-param";
import {TextParam} from "../model/ParamTypes/text-param";
import {CheckBoxParam} from "../model/ParamTypes/check-box-param";
import {ToDoParam} from "../model/to-do-param";
import {ToDoItem} from "../model/to-do-item";

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
  showListMenu = false;
  menuList: ToDoList = null;
  windowWidth: number;
  shownList: number = null;
  compactMode = true;
  lists: ToDoList[] = [];
  newList: boolean;

  private CHARLIST = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ";

  ngOnInit(): void {
    this.windowWidth = window.innerWidth;
    this.createDefault();
  }

  toggleOverlay() {
    this.showOverlay = !this.showOverlay;
  }

  toggleCompactMode() {
    this.compactMode = !this.compactMode;
  }

  @HostListener('window:resize')
  onResize() {
    this.windowWidth = window.innerWidth;
  }

  selectList(list: number) {
    if (list === this.shownList) {
      this.shownList = null;
    } else {
      this.shownList = list;
    }
  }

  createList(name: string, params: ToDoParam[]): ToDoList {
    const newList = new ToDoList(this.lists.length, name);
    this.lists.push(newList);
    newList.parameters = params;
    return newList;
  }

  openNewMenuList() {
    this.newList = true;
    this.menuList = new ToDoList(this.lists.length, '');
    this.showListMenu = true;
    this.showOverlay = true;
  }

  createItem(list: ToDoList) {
    list.createItem();
  }

  deleteItem(itemToDelete: ToDoItem) {
    /*const itemlist = this.lists[this.shownList].items;
    itemlist.splice(itemlist.findIndex(a => {
      return a.itemId === itemToDelete.itemId;
    }),1);*/
    // TODO: deleteItem()
    //console.error("Not implemented yet");
  }

  updateParamValue(event) {
    // update the parameter
    event.param.value = event.value;
  }

  cancelListEdit(menuList: ToDoList) {
    menuList = null;
    this.newList = false;
    this.showListMenu = false;
    this.showOverlay = false;
  }

  editList(menuList: ToDoList) {

  }

  addList(newList: ToDoList) {
    this.lists.push(newList);
    this.shownList = newList.listId;
  }

  private createDefault() {
    for (let listI = 0; listI < 3; listI++) {
      const newList = new ToDoList(this.lists.length, "List " + listI);
      this.lists.push(newList);

      //region --- params ---
      const minParams = 1;
      const maxParams = 4 - minParams;
      const paramtypeCount = 3;

      const paramCount = Math.round(Math.random() * maxParams + minParams);
      console.info(newList.title + " params: " + paramCount);
      for (let paramI = 0; paramI < paramCount; paramI++) {
        const paramType = Math.round(Math.random() * paramtypeCount);
        switch (paramType) {
          case 0:
            newList.addParam(new CheckBoxParam("cb " + paramI));
            break;
          case 1:
            newList.addParam(new ImageParam("img " + paramI));
            break;
          case 2:
            newList.addParam(new TextParam("txt " + paramI));
            break;
          case 3:
            newList.addParam(new TitleParam("ttl " + paramI));
            break;
        }
      }
      //endregion

      /*//region --- items ---
      const minItems = 3;
      const maxItems = 5 - minItems;

      const itemCount = Math.round(Math.random() * maxItems + minItems);
      console.info(newList.title + " items: " + itemCount);
      for (let itemI = 0; itemI < itemCount; itemI++) {
        const newItem = newList.createItem();
        newItem.done.value = (Math.round(Math.random()) === 1);
        for (let itemParamI = 0; itemParamI < newItem.parameters.length; itemParamI++) {
          const param = newItem.parameters[itemParamI];
          switch (param.type) {
            case "Checkbox":
              param.value = (Math.round(Math.random()) === 1);
              break;
            case "Image":
              //TODO: figure out what to do with an image
              break;
            case "Text":
            case "Title":
              param.value = "";
              const textLength = Math.ceil(Math.random() * (param.maxLength - 1) + 1);
              console.debug("filling " + textLength + " of max " + param.maxLength + " characters");
              for (let charI = 0; charI < textLength; charI++) {
                param.value += this.CHARLIST[Math.round(Math.random() * this.CHARLIST.length)]
              }
              break;
          }
        }
      }
      //endregion*/
    }
  }

  configureList(event: ToDoList) {
    this.newList = false;
    this.menuList = event;
    this.showListMenu = true;
    this.showOverlay = true;
  }
}
