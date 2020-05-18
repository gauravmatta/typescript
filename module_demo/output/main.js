/// <reference path="MyModule.ts" />
var mycar = new MyModule.Car('My Car');
console.log(mycar.name);
var AliasName = MyModule;
var mycarAlias = new AliasName.Car('My Alias Car');
console.log(mycar.name);
//# sourceMappingURL=main.js.map