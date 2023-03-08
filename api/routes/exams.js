const express = require('express');
const router = express.Router();

const ExamsController = require('../controllers/exams-controller');

router.get('/', ExamsController.getExamsData);

module.exports = router;
