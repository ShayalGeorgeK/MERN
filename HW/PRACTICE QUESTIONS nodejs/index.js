import util from 'util';

// Format strings with placeholders
const greeting = util.format('Hello, %s! Today is %s', 'Developer', new Date().toDateString());
console.log(greeting);