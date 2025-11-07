// import {a, arr} from './app.js'
// console.log(a);

// arr.forEach(element => {
//     console.log(element);
// });

// console.log(arr);

import user from './app.js'    // default variables are imported this way  
// here we can write any name and that works because its an default export 
import {age, arr} from './app.js'   // export named are imported this way  in { BRACKETS }
//  but here we have to be care full to the naming , they should be exactly matching 
console.log(user);
console.log(arr);
console.log(age);
