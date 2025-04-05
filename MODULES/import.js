import { add, multipule } from "./export.js"

add(40, 50)
multipule(20, 30)


import obj from "./export.js"
console.log(obj)

import { getUserInfo } from "./export.js"
console.log(getUserInfo())

// alias
import * as ele from "./export.js"
console.log(ele.PI)
console.log(ele.E)
console.log(ele.G)

async function loadModule() {
    try {
        let module = await import('./export.js')
        module.sayHello()
    } catch (err) {
        console.log(err)
    }
}
loadModule()

import *as allFunctions from './export.js';

console.log(allFunctions.add(5, 3)); 
console.log(allFunctions.product(10, 4)); 
console.log(allFunctions.areaOfCircle(7)); 