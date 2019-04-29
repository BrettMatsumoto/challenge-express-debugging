const express = require('express');
const router = express.Router();

const get = require('./get');

router.get('/contact', get);

module.exports = (req, res) => { //requires a module export
  res.render('contact');
};
