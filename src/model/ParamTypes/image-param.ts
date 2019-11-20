import {ToDoParam} from "../to-do-param";

export class ImageParam extends ToDoParam {
  image?: File;
  type = "Image";
  typeDesc = "Field for an image";
}
