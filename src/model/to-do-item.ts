import {ToDoParam} from "./to-do-param";
import {CheckBoxParam} from "./ParamTypes/check-box-param";

export class ToDoItem {
  done: CheckBoxParam;
  parameters: ToDoParam[];


  constructor(done: boolean, parameters: ToDoParam[]) {
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
