import {Component, HostListener, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations'
import {ToDoList} from "../model/to-do-list";
import {TitleParam} from "../model/ParamTypes/title-param";
import {ImageParam} from "../model/ParamTypes/image-param";
import {TextParam} from "../model/ParamTypes/text-param";
import {CheckBoxParam} from "../model/ParamTypes/check-box-param";
import {ScrollDispatcher} from "@angular/cdk/overlay";

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

  private CHARLIST = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ";

  ngOnInit(): void {
    this.windowWidth = window.innerWidth;
    this.createDefault();
  }

  toggleOverlay() {
    this.showOverlay = !this.showOverlay;
  }

  @HostListener('window:resize')
  onResize() {
    this.windowWidth = window.innerWidth;
  }

  selectList(list: number) {
    console.debug("list has been selected: " + list);
    this.shownList = list;
  }

  private createDefault() {

    for (let listI = 0; listI < 3; listI++) {
      const newList = new ToDoList("List " + listI);
      this.lists.push(newList);

      //region --- params ---
      const paramCount = Math.round(Math.random() * 3 + 1);
      console.info(newList.title + " params: " + paramCount);
      for (let paramI = 0; paramI < paramCount; paramI++) {
        const paramType = Math.round(Math.random() * 3);
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

      //region --- items ---
      const itemCount = Math.round(Math.random() * 20 + 5);
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
              const textLength = Math.ceil(Math.random() * (param.maxLength-1)+1);
              console.debug("filling " + textLength + " of max " + param.maxLength + " characters");
              for (let charI = 0; charI < textLength; charI++) {
                param.value += this.CHARLIST[Math.round(Math.random() * this.CHARLIST.length)]
              }
              break;
          }
        }
      }
      //endregion
    }
  }
}
