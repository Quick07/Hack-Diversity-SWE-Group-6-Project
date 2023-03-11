const { MongoClient, ObjectId } = require('mongodb');

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

const getExam = async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const exams = db.collection('Exams');
  const exam = await exams.findOne({ _id: new ObjectId(req.params._id)});
  console.log(req.params._id)
  if (!exam) {
    res.status(404).json({ message: 'Exam not found' });
  } else {
    res.status(200).json(exam);
  }
  await client.close();
};

const addExam = async (req, res) => {
  const { exam_Id, PATIENT_ID, brixia_scores, key_findings, xray_url } =
    req.body;

  await client.connect();
  const db = client.db(dbName);
  const exams = db.collection('Exams');
  const result = await exams.insertOne({
    exam_Id,
    PATIENT_ID,
    brixia_scores,
    key_findings,
    xray_url,
  });
  res.status(201).json(result.insertedId);
  await client.close();
};

const editExam = async (req, res) => {
  const { _id, exam_Id, PATIENT_ID, brixia_scores, key_findings, xray_url } =
    req.body;

  await client.connect();
  const db = client.db(dbName);
  const exams = db.collection('Exams');
  const result = await exams.updateOne(
    { _id: _id },
    {
      exam_Id: exam_Id,
      PATIENT_ID: PATIENT_ID,
      brixia_scores: brixia_scores,
      key_findings: key_findings,
      xray_url: xray_url,
    }
  );
  res.status(201).json(result.insertedId);
  await client.close();
};

module.exports = {
  getExamsData,
  getExam,
  addExam,
  editExam,
};
