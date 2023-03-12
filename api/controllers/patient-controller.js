const { MongoClient, ObjectId } = require('mongodb');

const uri = 'mongodb+srv://admin:pass@techdive.uhfnhov.mongodb.net/test';
const dbName = 'Exams';

let client = null;

const getClient = async () => {
  if (client && client.topology && client.topology.isConnected()) {
    return client;
  }

  client = new MongoClient(uri);

  try {
    await client.connect();
    return client;
  } catch (err) {
    client = null;
    throw err;
  }
};

const getPatientData = async (req, res) => {
  const client = await getClient();
  const db = client.db(dbName);
  const patients = db.collection('Patients');
  const result = await patients.find().toArray();
  res.status(200).json(result);
};

// const getPatientData = async (req, res) => {
//       await client.connect();
//       const db = client.db(dbName);
//       const patients = db.collection('Patients');
//       const result = await patients.find().toArray();
//       res.status(200).json(result);
//       await client.close();
//   };

  // const getPatient = async (req, res) => {
  //   const client = await getClient();
  //   const db = client.db(dbName);
  //   const patients = db.collection('Patients');
  //   const patient = await patients.findOne({ _id: new ObjectId(req.params._id)});
  //   console.log(req.params._id)
  //   if (!patient) {
  //     res.status(404).json({ message: 'Exam not found' });
  //   } else {
  //     res.status(200).json(patient);
  //   }
  // };

  const getPatientByID = async (req, res) => {
    const client = await getClient();
    const db = client.db(dbName);
    const patients = db.collection('Patients');
    const patient = await patients.findOne({ PATIENT_ID: req.params.PATIENT_ID});
    console.log(req.params.PATIENT_ID)
    if (!patient) {
      res.status(404).json({ message: 'Exam not found' });
    } else {
      res.status(200).json(patient);
    }
  };

  const addPatient = async (req, res) => {
    const { PATIENT_ID, AGE, SEX, LATEST_BMI, LATEST_WEIGHT } =
      req.body;
  
    const client = await getClient();
    const db = client.db(dbName);
    const patients = db.collection('Patients');
    const result = await patients.insertOne({
      PATIENT_ID, 
      AGE, 
      SEX, 
      LATEST_BMI, 
      LATEST_WEIGHT
    });
      console.log(req.body);
    res.status(201).json(result.insertedId);
  };

  module.exports = {
    getPatientData,
    addPatient,
    getPatientByID
  };