import {IMyInterface} from './IMyInterface'
import {Car} from './Car'
import {ERiksha, Truck} from './truck';
let myObj : IMyInterface={
    id: 2,
    name: 'Gaurav',
    method() { console.log('hello'); },
    methodWithReturnVal () { return 2; },
    sum(numbers)
    {
        return numbers.reduce( (a,b) => { return a + b } );
    }
};

let sum=myObj.sum([1,2,3]);

let car=new Car(0);
console.log(car.distance);
car.move();
console.log(car.distance);
car._speed=2;
car.move();
console.log(car.distance);
car._speed=3;
car.move();
console.log(car.distance);

let Audi=new Car();
console.log(Audi.distance);
Audi.distance=55;
console.log(Audi.distance);

//Calling Static Variable
console.log(Car.controls.isAuto);

const e_riksha = new ERiksha();
console.log(e_riksha.name);
e_riksha.distance = 5;
e_riksha.move();
e_riksha.move();
console.log(e_riksha.distance);

const truck = new Truck();
console.log(truck.name);