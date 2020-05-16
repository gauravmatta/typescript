import {IMyInterface} from './IMyInterface'
import {Car} from './car'
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

let car=new Car();
car.distance=0;
car.move();
car.move();