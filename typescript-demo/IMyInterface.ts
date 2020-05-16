interface IMyInterface{
        // some properties
        id: number;
        name: string;

        // some methods
        method(): void;
        methodWithReturnVal():number;
        sum(nums: number[]):number;
}
export{IMyInterface}