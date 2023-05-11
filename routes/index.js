const express = require('express');

const router = express.Router();

/* GET calculator-page */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Pandamonium' });
});

module.exports = router;
