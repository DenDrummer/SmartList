import {ToDoParam} from "./to-do-param";
import {CheckBoxParam} from "./ParamTypes/check-box-param";

export class ToDoItem {
  listId: number;
  itemId: number;
  done: CheckBoxParam;
  parameters: ToDoParam[];


  constructor(listId: number, itemId: number, done: boolean, parameters: ToDoParam[]) {
    this.listId = itemId;
    this.itemId = itemId;
    this.done = new CheckBoxParam("Done");
    this.done.value = done;
    this.parameters = parameters;
  }

  public addParam(param: ToDoParam) {
    this.parameters.push(param);
  }

  findParam(paramName: string) {
    for (let i = 0; i < this.parameters.length; i++) {
      if (this.parameters[i].name === paramName) {
        return this.parameters[i];
      }
    }
    return null;
  }
}
