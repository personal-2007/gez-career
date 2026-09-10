const express = require('express');
const router = express.Router();
const { getSalaries } = require('../controllers/salaryController');

router.get('/', getSalaries);

module.exports = router;
