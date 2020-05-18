/// <reference path="MyModule.ts" />
const mycar = new MyModule.Car('My Car');
console.log(mycar.name);

import AliasName = MyModule;
const mycarAlias = new AliasName.Car('My Alias Car');
console.log(mycarAlias.name);