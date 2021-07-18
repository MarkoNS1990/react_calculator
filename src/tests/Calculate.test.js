import Calculate from '../logic/calculate';

const test1 = { total: null, next: null, operation: null };
const test2 = { total: '6', next: null, operation: null };

describe('Calculate methods', () => {
  it('Should be a function', () => {
    expect(typeof Calculate).toEqual('function');
  });
  it('Should return an object', () => {
    const result = Calculate(test1, 9);
    expect(typeof result).toEqual('object');
  });
  it('Should total be a number', () => {
    const result = Calculate(test2, 9);
    const value = (result.total * 1);
    expect(typeof value).toEqual('number');
  });
  it('Should return null object', () => {
    const result = Calculate(test1, 'AC');
    expect(result).toStrictEqual({ next: null, operation: null, total: null });
  });

  it('Should return a negative value', () => {
    const result = Calculate({ total: '6', next: '10', operation: '+' }, '=');
    expect(result.total * 1).toEqual(16);
    expect(result.next).toEqual(null);
    expect(result.operation).toEqual('=');
  });
  it('Should return a sustrated value', () => {
    const result = Calculate({ total: '6', next: '10', operation: '-' }, '=');
    expect(result.total * 1).toEqual(-4);
    expect(result.next).toEqual(null);
    expect(result.operation).toEqual('=');
  });
  it('Should return a multiplied value', () => {
    const result = Calculate({ total: '6', next: '10', operation: 'X' }, '=');
    expect(result.total * 1).toEqual(60);
    expect(result.next).toEqual(null);
    expect(result.operation).toEqual('=');
  });
  it('Should return a divided value', () => {
    const result = Calculate({ total: '6', next: '10', operation: '/' }, '=');
    expect(result.total * 1).toEqual(0.6);
    expect(result.next).toEqual(null);
    expect(result.operation).toEqual('=');
  });
  it("check '+/-' sign", () => {
    expect(Calculate({ total: '23', next: null, operation: null }, '+/-').total).toEqual('-23');
    expect(Calculate({ total: '33', next: '23', operation: '÷' }, '+/-').next).toEqual('-23');
  });
  it("check '.' sign", () => {
    expect(Calculate({ total: '23', next: null, operation: null }, '.').total).toEqual('23.');
    expect(Calculate({ total: '33', next: '-23', operation: '÷' }, '.').next).toEqual('-23.');
  });
});
