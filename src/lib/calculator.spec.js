const { sum, div, sub, mul } = require('./calculator');

it('should sum 2 and 2 and the result must be 4', () => {
  expect(sum(2, 2)).toBe(4);
});

it('should sum 2 and 2 even one of them is a string and the result must be 4', () => {
  expect(sum('2', '2')).toBe(4);
});

it('should throw an error if what is provider to the method cannot be sum', () => {
  expect(() => { sum('', '2') }).toThrowError();
  expect(() => { sum([2, 2]) }).toThrowError();
  expect(() => { sum({}) }).toThrowError();
  expect(() => { sum() }).toThrowError();
});

it('should sub 2 and 2 and the result must be 0', () => {
  expect(sub(2, 2)).toBe(0);
});

it('should sub 2 and 2 even one of them is a string and the result must be 0', () => {
  expect(sub('2', 2)).toBe(0)
});

it('should throw an error if what is provider to the method cannot be sub', () => {
  expect(() => sub('', '2')).toThrowError();
  expect(() => sub([2, 2])).toThrowError();
  expect(() => sub({})).toThrowError();
  expect(() => sub()).toThrowError();
});

it('should div 2 and 2 and the result must to be 1', () => {
  expect(div(2, 2)).toBe(1);
});

it('should div 2 as 2 even one of them is a string and the result must be 1', () => {
  expect(div('2', 2)).toBe(1)
});

it('should throw an error if what is provider to the method cannot be div', () => {
  expect(() => div('', '2')).toThrowError();
  expect(() => div([2, 2])).toThrowError();
  expect(() => div({})).toThrowError();
  expect(() => div()).toThrowError();
});

it('should mul 3 and 3 and the result must to be 9', () => {
  expect(mul(3, 3)).toBe(9);
});

it('should mul 3 and 3 even one of them is a string and the result must be 9', () => {
  expect(mul('3', 3)).toBe(9);
});

it('should throw an error if what is provider to the method cannot be mul', () => {
  expect(() => mul('', '3')).toThrowError();
  expect(() => mul([3,3])).toThrowError();
  expect(() => mul({})).toThrowError();
  expect(() => mul()).toThrowError();
});