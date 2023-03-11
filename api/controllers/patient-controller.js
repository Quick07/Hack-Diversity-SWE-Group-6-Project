const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://admin:pass@techdive.uhfnhov.mongodb.net/test';
const dbName = 'Exams';

const client = new MongoClient(uri);

const getPatientData = async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const patients = db.collection('Patients');
  const result = await patients.find().toArray();
  res.status(200).json(result);
  await client.close();
};

module.exports = {
  getPatientData,
};
