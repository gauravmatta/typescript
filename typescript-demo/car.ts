class Car
{
    private distance : number
    constructor(){
        this.distance=0;
    }
    move():void{
        this.distance=this.distance+1;
        }
}

export {Car}