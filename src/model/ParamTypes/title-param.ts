import {ToDoParam} from "../to-do-param";

export class TitleParam extends ToDoParam {
  title: string;
  maxLength = 25;
  type = "Title";
  typeDesc = "Field for a small amount of text (" + this.maxLength + " characters)";
}
