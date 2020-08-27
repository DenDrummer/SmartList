import {ToDoParam} from "../to-do-param";

export class TitleParam extends ToDoParam {
  value: string;
  maxLength = 50;
  type = "Title";
  typeDesc = "Field for a small amount of text (" + this.maxLength + " characters)";
}
