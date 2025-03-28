// // Q-1
// const person = {
//     name: "John Doe",
//     age: 30,
//     address: {
//         city: "New York",
//         country: "USA"
//     },
//     hobbies: ["Reading", "Traveling"]
// };

// let {name:FullName,age,address:{city,country="unknown"},hobbies:[firsthobby,secoundhobby]}=person
// console.log(FullName,age,city,country,firsthobby)

// // Q-2
// const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"]
// let [a,b,...rest]=fruits
// [a,b]=[b,a]
// console.log(a,b)
// console.log(rest)
// Q-3
// Write a function 
// sumNumbers that takes an unlimited number of arguments and returns
//  their sum. Use the rest operator inside the function.
//  sumNumbers(1, 2, 3, 4); // Output: 10
//  sumNumbers(10, 20, 30); // Output: 6

// function sumOfNum(...sumNumber){
//     return sumNumber.reduce((sum,next)=>sum+next)
// }
// console.log(sumOfNum(1, 2, 3, 4))
// console.log(sumOfNum(10, 20, 30, 40))

// Q-4
// const user = { name: "Alice", age: 25 }; 
// const job = { title: "Developer", company: "TechCorp" }
// let emp={...user,...job,experience: "2 years"}
// console.log(emp)

// Q-5
//
//  1. Create a shallow copy of the 
// numbers array using the spread operator.
//  2. Create a new array that has the same numbers but with 
// 0 added at the beginning
//  and 6 at the end
// let numbers = [1, 2, 3, 4, 5];
// let arr=[...numbers]
// arr.unshift(0)
// arr.push(6)
// console.log(arr)


