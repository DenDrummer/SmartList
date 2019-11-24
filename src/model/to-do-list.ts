import {ToDoItem} from "./to-do-item";
import {ToDoParam} from "./to-do-param";

export class ToDoList {
  title: string;
  items: ToDoItem[] = [];
  parameters: ToDoParam[] = [];

  constructor(title: string) {
    this.title = title;
  }

  public addParam(param: ToDoParam) {
    console.log("attempting to add param:");
    console.log(param);
    if (param.name !== "Done") {
      if (!this.checkExistingParams(param)) {
        this.parameters.push(param);
        console.log("param added to list");
        this.addParamToItems(param);
      }
    }
  }

  private addParamToItems(param: ToDoParam) {
    if (this.items.length > 0) {
      for (let item of this.items) {
        item.addParam(param);
      }
      console.log("param added to items");
    }
  }

  private checkExistingParams(param: ToDoParam) {
    console.log("testing param:");
    let existingParam = false;
    for (let i = 0; i < this.parameters.length && !existingParam; i++) {
      if (this.parameters[i].name === param.name) {
        existingParam = true;
      }
    }
    return existingParam;
  }

  public createItem() {
    return new ToDoItem(false, JSON.parse(JSON.stringify(this.parameters)));
  }
}
