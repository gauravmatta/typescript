class Car
{
    // private distance : number
    constructor(private distance=0){
    }
    move():void
    {
        this.distance=this.distance+1;
    }
    getDistance():number
    {
        return this.distance;
    }
}

export {Car}