import first, { returnHi as sayHi, last, middle } from './utils.js';
// import andrew from './andrew.js';
import * as everything from './andrew.js';
import { handleButtonClick } from './handlers.js';

// const name = 'Andrew';
// console.log(andrew);
// console.log(everything);

// console.log(first);

// console.log(sayHi(name));
// console.log(last);
// console.log(middle);
const button = document.querySelector('button');

button.addEventListener('click', handleButtonClick);
