import {ToDoItem} from "./to-do-item";
import {ToDoParam} from "./to-do-param";

export class ToDoList {
  listId: number;
  title: string;
  items: ToDoItem[] = [];
  parameters: ToDoParam[] = [];

  constructor(listId: number, title: string) {
    this.listId = listId;
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
    const newItem = new ToDoItem(this.listId, this.items.length, false, JSON.parse(JSON.stringify(this.parameters)));
    this.items.push(newItem);
    return newItem;
  }

  public deleteItem(item: ToDoItem) {
    if (this.listId == item.listId) {
      const itemToRemove = this.items.find((i) => {
        return i.itemId == item.itemId;
      });
      if (itemToRemove != null) {
        this.items = this.items.splice(itemToRemove.itemId, 1);
      } else {
        console.error("tried to remove a nonexisting item")
      }
    } else {
      console.error("tried to remove an item from the wrong list")
    }
    this.updateIds();
  }

  public percentageDone() {
    if (this.items.length > 0) {
      const doneItems = this.items.filter(function (item) {
        return item.done.value;
      }).length;
      return Math.round(doneItems / this.items.length * 1000) / 10;
    } else {
      return 100;
    }
  }

  public swapParams(first: number, second: number) {
    let p1 = this.parameters[first];
    // let p2 = this.parameters[second];
    this.parameters[first] = this.parameters[second];
    this.parameters[second] = p1;
    for (let item of this.items) {
      let ip1 = item.parameters[first];
      // let ip2 = item.parameters[second];
      item.parameters[first] = item.parameters[second];
      item.parameters[second] = ip1;
    }
  }

  public removeParam(param: ToDoParam) {
    //remove param from to-do list
    let paramIndex = this.parameters.findIndex(p => p === param);
    this.parameters.splice(paramIndex, 1);

    //remove param from all the items in the to-do list, if there are any items
    if (this.items.length > 0) {
      for (let item of this.items) {
        let itemParamIndex = item.parameters.findIndex(p => p.name === param.name);
        item.parameters.splice(itemParamIndex, 1);
      }
    }
  }


  private updateIds() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].itemId = i;
    }
  }

  private addParamToItems(param: ToDoParam) {
    if (this.items.length > 0) {
      for (let item of this.items) {
        item.addParam(param);
      }
    }
    this.updateIds();
  }
}
