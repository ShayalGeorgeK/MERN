// //common js
// const math = require("./Math.js")

// const {add,substract,multiply,divide} = math

// const sum = add(2,-8)
// if (sum>0) {
//     console.log("sum is +Ve");
    
// } else {
//     console.log("sum is -Ve");
// }







//ES6
import {add,substract} from "./Math.js"

const sum = add(2)
if (sum>0) {
    console.log("sum is +Ve");
    
} else {
    console.log("sum is -Ve");
}