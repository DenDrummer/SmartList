import {ToDoParam} from "../to-do-param";

export class CheckBoxParam extends ToDoParam {
  value: boolean;
  type = "Checkbox";
  typeDesc = "Field for a simple checkbox";
}
