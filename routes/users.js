const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json('HA, TB, RF och MA');
});

module.exports = router;
