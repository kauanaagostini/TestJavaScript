const { queryString, parse } = require('./querystring')

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Kauana',
      profession: 'developer'
    };

    expect(queryString(obj)).toBe('name=Kauana&profession=developer');
  });

  it('should create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'Kauana',
      abilities: ['JS', 'TDD']
    };

    expect(queryString(obj)).toBe('name=Kauana&abilities=JS,TDD'
    );
  });

  it('should throw an error when an object is passed as a value', () => {
    const obj = {
      name: 'Kauana',
      abilities: {
        first: 'JS',
        second: 'TDD'
      }
    };

    expect(() => { queryString(obj) }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Kauana&profession=developer';
    expect(parse(qs)).toEqual({
      name: 'Kauana',
      profession: 'developer',
    });
  });

  it('should convert a query string of a single key-value pair to a objetc', () => {
    const qs = 'name=Kauana'
    expect(parse(qs)).toEqual({
      name: 'Kauana',
    })
  });

  it('should convert a query string to an object taking care of comma separeted values', () => {
    const qs = 'name=Kauana&abilities=JS,TDD'
    expect(parse(qs)).toEqual({
      name: 'Kauana',
      abilities: ['JS', 'TDD'],
    });
  });
});
