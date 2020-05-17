import {Vehicle} from './vehicle';
export class ERiksha extends Vehicle {
  constructor(name?: string) {
    super();
    this.name = name || 'ERiksha';
  }
}
export class Truck extends Vehicle {
  constructor(name?: string) {
    super();
    this.name = name || 'Truck';
  }
}