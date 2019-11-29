export abstract class ToDoParam {
  name: string;
  type: string;
  typeDesc: string;
  value?;
  maxLength?;

  constructor(name: string) {
    this.name = name;
  }
}
