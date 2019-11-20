import {ToDoParam} from "./to-do-param";
import {CheckBoxParam} from "./ParamTypes/check-box-param";

export class ToDoItem {
  id: number;
  done: CheckBoxParam;
  parameters: ToDoParam[];


  constructor(id: number, done: boolean, parameters: ToDoParam[]) {
    this.id = id;
    this.done = new CheckBoxParam("Done");
    this.done.checked = done;
    this.parameters = parameters;
  }

  public addParam(param: ToDoParam) {
    this.parameters.push(param);
  }
}
