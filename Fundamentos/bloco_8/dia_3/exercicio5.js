
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  return names.reduce((accumulator, currentValue) => accumulator + currentValue
  .split('')
  .reduce((accumulator, currentValue) => currentValue.toLowerCase() === 'a' ? accumulator + 1 : accumulator, 0)
  , 0)
}

assert.deepStrictEqual(containsA(), 20);