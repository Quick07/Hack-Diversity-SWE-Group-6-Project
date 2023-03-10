const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://admin:pass@techdive.uhfnhov.mongodb.net/test';
const dbName = 'Exams';

const client = new MongoClient(uri);

const getExamsData = async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const exams = db.collection('Exams');
  const result = await exams.find().toArray();
  res.status(200).json(result);
  await client.close();
};

const addExam = async (req, res) => {
  const { exam_Id, PATIENT_ID, brixia_scores, key_findings, xray_url } = req.body;

  await client.connect();
  const db = client.db(dbName);
  const exams = db.collection('Exams');
  const result = await exams.insertOne({exam_Id, PATIENT_ID, brixia_scores, key_findings, xray_url });
  res.status(201).json(result.insertedId);
  await client.close();
};


module.exports = {
  getExamsData,
  addExam,
};