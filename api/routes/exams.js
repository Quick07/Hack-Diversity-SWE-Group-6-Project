const express = require('express');
const router = express.Router();

const ExamsController = require('../controllers/exams-controller');
router.get('/', ExamsController.getExamsData);
router.get('/:_id', ExamsController.getExam);
router.post('/', ExamsController.addExam);
router.put('/', ExamsController.editExam);
router.delete('/:_id', ExamsController.deleteExam);
router.delete('/', ExamsController.deleteExams);
module.exports = router;

