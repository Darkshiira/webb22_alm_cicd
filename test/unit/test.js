const assert = require('assert');
const { Calculator } = require('../../routes/calc');
// Will add a bug here to show how the test fails
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3, 4].indexOf(4), -1);
    });
  });
  describe('Calculator', function () {
    const calc = new Calculator();
    it('should return 3 when adding 1 and 2', function () {
      calc.add(1, 2);
      assert.equal(calc.giveResult(), 3);
    });
    it('should return 1 when subtracting 2 from 3', function () {
      calc.subtract(3, 2);
      assert.equal(calc.giveResult(), 1);
    });
    it('should return 6 when multiplying 2 and 3', function () {
      calc.multiply(2, 3);
      assert.equal(calc.giveResult(), 6);
    });
    it('should return 2 when dividing 6 by 3', function () {
      calc.divide(6, 3);
      assert.equal(calc.giveResult(), 2);
    });
  });
});
