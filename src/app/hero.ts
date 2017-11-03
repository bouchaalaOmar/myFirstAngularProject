export class Hero {
  id: number;
  name: string;
  constructor(private _id?: number, private _name?: string) {
    this.id = _id;
    this.name = _name;
  }
}

