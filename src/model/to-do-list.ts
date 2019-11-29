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
    console.info("adding param");
    console.debug(param);
    if (param.name !== "Done") {
      if (!this.isExistingParam(param)) {
        this.parameters.push(param);
        console.info("param added to list");
        this.addParamToItems(param);
      }
    }
  }

  private addParamToItems(param: ToDoParam) {
    if (this.items.length > 0) {
      for (let item of this.items) {
        item.addParam(param);
      }
      console.info("param added to items");
    }
  }

  isExistingParam(param: ToDoParam) {
    console.info("testing param:");
    let existingParam = false;
    for (let i = 0; i < this.parameters.length && !existingParam; i++) {
      if (this.parameters[i].name === param.name) {
        existingParam = true;
      }
    }
    return existingParam;
  }

  findParam(paramName: string) {
    for (let i = 0; i < this.parameters.length; i++) {
      if (this.parameters[i].name === paramName) {
        return this.parameters[i];
      }
    }
    return null;
  }

  public createItem() {
    const newItem =new ToDoItem(false, JSON.parse(JSON.stringify(this.parameters)));
    this.items.push(newItem);
    return newItem;
  }
}
