const express = require('express');
const router = express.Router();

const get = require('./get');

router.get('/about', get);

module.exports = (req, res) => { //requires a module export
  res.render('about');
};
