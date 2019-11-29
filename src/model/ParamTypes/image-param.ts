import {ToDoParam} from "../to-do-param";

export class ImageParam extends ToDoParam {
  value?: File;
  type = "Image";
  typeDesc = "Field for an image";
}
