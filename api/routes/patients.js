const express = require('express');
const router = express.Router();

const PatientController = require('../controllers/patient-controller');
router.get('/', PatientController.getPatientData);
router.get('/:PATIENT_ID', PatientController.getPatientByID);
router.post('/', PatientController.addPatient);

module.exports = router;
