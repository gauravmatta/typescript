import {ICarProps} from './ICarProps'
import {ICarMethods} from './ICarMethods'
class Car implements ICarProps, ICarMethods
{
    static controls:{isAuto:boolean}=
    {
        isAuto:true
    };

    static isAuto():boolean {
        return Car.controls.isAuto;
      }

    constructor(public _distance=0,public _speed=1)
    {

    }
    
    move():void
    {
        this._distance=this._distance+this._speed;
    }

    get distance()
    {
        return this._distance;
    }

    set distance(newDistance:number)
    {
        this._distance=newDistance;
    }
}

export {Car}