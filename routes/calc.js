const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('This is a calculator');
});

const Calculator = class Calculator {
  constructor() {
    this.result = 0;
  }

  add(value1, value2) {
    this.result = value1 + value2;
  }

  subtract(value1, value2) {
    this.result = value1 - value2;
  }

  multiply(value1, value2) {
    this.result = value1 * value2;
  }

  divide(value1, value2) {
    this.result = value1 / value2;
  }

  giveResult() {
    return this.result;
  }
};

router.get('/add', (req, res, next) => {
  const value1 = parseInt(req.query.val[0], 10);
  const value2 = parseInt(req.query.val[1], 10);
  const calc = new Calculator();
  calc.add(value1, value2);
  res.send(`Result: ${calc.giveResult()}`);
});

module.exports = router;

module.exports = { Calculator };
