// working with wait function
import wait from 'waait';

// import faker from 'faker/locale/ru';
// working with faker module npm
// import { name } from 'faker';
// // console.log(`Hello ${faker.name.firstName()}`);
// console.log(`Hello ${name.firstName()}`);
// // const fakeNames = Array.from({ length: 10 }, name.firstName);
// const fakeNames = Array.from(
//   { length: 10 },
//   () => `${name.firstName()} ${name.lastName()}`
// );
// console.log(fakeNames);

// working  with date-fns
// working with format distance

import { formatDistance, format } from 'date-fns';

// import axios instead use a fetch()
import axios from 'axios';

// import lodash - utility working with arrays, objects and etc
import { intersection, isEqual } from 'lodash';

// await to js
import to from 'await-to-js';

const diff = formatDistance(new Date(), new Date(2020, 3, 4, 10, 32, 0), {
  addSuffix: true,
});

const date = new Date();
// January the 12th 2020
const formatted = format(date, `LLLL 'the' do y`);
console.log(diff);
console.log(formatted);

// async function go() {
//   console.log('Going!');
//   await wait(200);
//   console.log('Ending');
// }
// go();

async function getJoke() {
  const { data } = await axios.get('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });
  console.log(data.joke);
}

getJoke();

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [5, 3, 8, 3, 7, 453, 34];

const sameValues = intersection(a, b);

console.log(sameValues);

const person1 = {
  name: 'Andrew',
};
const person2 = {
  name: 'Andrew',
};
console.log(isEqual(person1, person2));

// working with await to js

function checkIfNameIsCool(firstName) {
  return new Promise(function(resolve, reject) {
    if (firstName === 'Andrew') {
      resolve('Cool name');
      return;
    }
    return reject(new Error('Bad name'));
  });
}

async function checkName() {
  const [err, successValue] = await to(checkIfNameIsCool('White'));
  if (err) {
    // deal with it
    console.log(err);
  } else {
    console.log(successValue);
  }
}
checkName();
