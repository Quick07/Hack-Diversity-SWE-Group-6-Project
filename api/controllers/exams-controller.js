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
  const { exam_Id, PATIENT_ID, brixia_scores, key_findings } = req.body;

  await client.connect();
  const db = client.db(dbName);
  const exams = db.collection('Exams');
  const result = await exams.insertOne({exam_Id, PATIENT_ID, brixia_scores, key_findings });
  res.status(201).json(result.insertedId);
  await client.close();
};



// const postExamData = async (req, res) => {
//   const { exam_Id, PATIENT_ID, brixia_scores, key_findings } = req.body;

//   try {
//     await client.connect();
//     const db = client.db(dbName);
//     const exams = db.collection('Exams');
//     const result = await exams.insertOne({
//       exam_Id,
//       PATIENT_ID,
//       brixia_scores,
//       key_findings
//     });
//     res.status(201).json(result);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   } finally {
//     await client.close();
//   }
// };



module.exports = {
  getExamsData,
  addExam,
};