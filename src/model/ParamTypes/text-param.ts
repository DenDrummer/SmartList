import {ToDoParam} from "../to-do-param";

export class TextParam extends ToDoParam {
  text: string;
  maxLength = 500;
  type = "Text";
  typeDesc = "Field for a large amount of text (" + this.maxLength + " characters)";
}
