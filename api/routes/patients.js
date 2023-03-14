const express = require('express');
const router = express.Router();

const PatientController = require('../controllers/patient-controller');
router.get('/', PatientController.getPatientData);
router.get('/:PATIENT_ID', PatientController.getPatientByID);
router.post('/', PatientController.addPatient);
router.put('/:PATIENT_ID', PatientController.editPatient);
router.delete('/:PATIENT_ID', PatientController.deletePatient);

module.exports = router;
