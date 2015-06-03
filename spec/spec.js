var myCode = require('./../app.js')

describe('first test suite', function() {
  it('sum dat test', function() {
    expect(myCode.sum(1,2)).toEqual(3);
  });
  it('sum dat test numba 2', function() {
    expect(myCode.sum(2,2)).toEqual(4);
  });
});

describe('should return average', function() {
  it('#average()', function() {
    expect(myCode.average(1,2,3)).toEqual(2);
  });
  it('#average()', function() {
    expect(myCode.average(2,6,10)).toEqual(6);
  });
});

describe('should return divided value', function() {
  it('#divide()', function() {
    expect(myCode.divide(6,3)).toEqual(2);
  });
  it('#divide()', function() {
    expect(myCode.divide(25,5)).toEqual(5);
  });
});

describe('should return prime', function() {
  it('#prime()', function() {
    expect(myCode.isPrime(7)).toEqual(true);
  });
  it('#prime()', function() {
    expect(myCode.isPrime(13)).toEqual(true);
  });
  it('#prime()', function() {
    expect(myCode.isPrime(8)).toEqual(false);
  });
  it('#prime()', function() {
    expect(myCode.isPrime(1)).toEqual(false);
  });
})
