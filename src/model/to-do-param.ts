//import {MAX_LENGTH_VALIDATOR} from "@angular/forms/src/directives/validators";

//const max = 25;

export class ToDoParam {
  //@MAX_LENGTH_VALIDATOR(25)
  name: string;
  type: string;
  typeDesc: string;

  constructor(name: string) {
    this.name = name;
  }
}
