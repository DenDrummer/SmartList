import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ToDoParam} from "../../../model/to-do-param";
import {CheckBoxParam} from "../../../model/ParamTypes/check-box-param";
import {ImageParam} from "../../../model/ParamTypes/image-param";
import {TextParam} from "../../../model/ParamTypes/text-param";
import {TitleParam} from "../../../model/ParamTypes/title-param";

@Component({
  selector: 'app-param-menu',
  templateUrl: './param-menu.component.html',
  styleUrls: ['./param-menu.component.scss']
})
export class ParamMenuComponent implements OnInit {

  //region --- Output ---
  @Output()
  paramCreated = new EventEmitter<ToDoParam>();
  //endregion

  //region -- Variables to create the menu ---
  paramTypes: ToDoParam[] =
    [new CheckBoxParam("Checkbox"),
      new ImageParam("Image"),
      new TextParam("Text"),
      new TitleParam("Title")];
  //endregion

  //region --- Variables to create the new parameter ---
  selectedType: string = "";
  param: ToDoParam;
  paramName: string = "";

  //endregion

  constructor() {
  }

  ngOnInit() {
  }

  createParameter() {
    this.paramCreated.emit(this.param);
  }

  getTypeDescription() {
    return this.paramTypes.find(p => p.type === this.selectedType).typeDesc;
  }

  selectType(selectedType: string) {
    this.param = JSON.parse(JSON.stringify(this.paramTypes.find(p => p.type === this.selectedType)));
  }
}
