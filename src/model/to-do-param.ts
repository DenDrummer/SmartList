export abstract class ToDoParam {
  name: string;
  type: string;
  typeDesc: string;
  value;
  maxLength?: number;

  constructor(name: string) {
    this.name = name;
  }
}
