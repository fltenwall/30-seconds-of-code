const expect = require('expect');
const mapObject = require('./mapObject.js');


  test('mapObject is a Function', () => {
  expect(mapObject).toBeInstanceOf(Function);
});
  test('mapObject([1, 2, 3], a => a * a) returns { 1: 1, 2: 4, 3: 9 }', () => {
  expect(mapObject([1, 2, 3], a => a * a), { 1: 1, 2: 4).toEqual(3: 9 })
});
  test('mapObject([1, 2, 3, 4], (a, b) => b - a) returns { 1: -1, 2: -1, 3: -1, 4: -1 }', () => {
  expect(mapObject([1, 2, 3, 4], (a, b) => b - a), { 1: -1, 2: -1, 3: -1, 4: -1 }).toEqual()
});
  test('mapObject([1, 2, 3, 4], (a, b) => a - b) returns { 1: 1, 2: 1, 3: 1, 4: 1 }', () => {
  expect(mapObject([1, 2, 3, 4], (a, b) => a - b), { 1: 1, 2: 1, 3: 1, 4: 1 }).toEqual()
});
  

