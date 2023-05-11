const assert = require('assert');
const { Calculator } = require('../routes/calc');

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
  describe('Calculator', function () {
    const calc = new Calculator();
    it('should return 3 when adding 1 and 2', function () {
      calc.add(1, 2);
      assert.equal(calc.giveResult(), 3);
    });
  });
});
