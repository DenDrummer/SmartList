import {ToDoParam} from "../to-do-param";

export class CheckBoxParam extends ToDoParam {
  value: boolean = false;
  type = "Checkbox";
  typeDesc = "Field for a simple checkbox";
}
