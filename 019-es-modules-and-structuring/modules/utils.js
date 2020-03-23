const last = 'Stepanets';
// export const last = 'Stepanets';
const middle = 'Vladimirovich';

export function returnHi(name) {
  return `hi ${name} ${last}`;
}

const first = 'And';

// another way to export variables
// NAMED exports - we can have as many as we want
export { last, middle };
export default first;
