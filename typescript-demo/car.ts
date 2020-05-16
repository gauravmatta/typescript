class Car
{
    static controls:{isAuto:boolean}={
        isAuto:true
    };

    static isAuto():boolean {
        return Car.controls.isAuto;
      }

    constructor(private _distance=0){
    }
    move():void
    {
        this._distance+=1;
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