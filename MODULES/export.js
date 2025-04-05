 function add(a,b){
    console.log(a+b)
}
 function multipule(a,b){
    console.log(a*b)
}

export{
    add,multipule
}

 let obj={
    "name":"Naresh",
    "age":"24"
}
export default obj
export function getUserInfo(){
    console.log(obj.name)
    console.log(obj.age)
}

let PI=3.14
let E=2.71
let G=9.8
export{
    PI,E,G
}

export function sayHello() {
    console.log("hello Naresh")   
}
import { areaOfCircle } from './area.js'
export {areaOfCircle} from './area.js'