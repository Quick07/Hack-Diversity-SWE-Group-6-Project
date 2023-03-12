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

const getExamsData = async (req, res) => {
  const client = await getClient();
  const db = client.db(dbName);
  const exams = db.collection('Exams');
  const result = await exams.find().toArray();
  res.status(200).json(result);
};

const getExam = async (req, res) => {
  const client = await getClient();
  const db = client.db(dbName);
  const exams = db.collection('Exams');
  const exam = await exams.findOne({ _id: new ObjectId(req.params._id)});
  console.log(req.params._id)
  if (!exam) {
    res.status(404).json({ message: 'Exam not found' });
  } else {
    res.status(200).json(exam);
  }
};

const addExam = async (req, res) => {
  const { exam_Id, PATIENT_ID, brixia_scores, key_findings, xray_url } =
    req.body;

  const client = await getClient();
  const db = client.db(dbName);
  const exams = db.collection('Exams');
  const result = await exams.insertOne({
    exam_Id,
    PATIENT_ID,
    brixia_scores,
    key_findings,
    xray_url,
  });
    console.log(req.body);
  res.status(201).json(result.insertedId);
};

const editExam = async (req, res) => {
  const { _id, exam_Id, PATIENT_ID, brixia_scores, key_findings, xray_url } =
    req.body;

  const client = await getClient();
  const db = client.db(dbName);
  const exams = db.collection('Exams');
  const result = await exams.updateOne(
    { _id: new ObjectId(_id) },
    {
      $set: {
        exam_Id: exam_Id,
        PATIENT_ID: PATIENT_ID,
        brixia_scores: brixia_scores,
        key_findings: key_findings,
        xray_url: xray_url,
      },
    }
  );
  res.status(201).json(result.insertedId);
};

const deleteExam = async (req, res) => {

  const client = await getClient();
  const db = client.db(dbName);
  const exams = db.collection('Exams');
  const result = await exams.deleteOne({_id: new ObjectId(req.params._id)});
  res.status(200).json(result);
};

const deleteExams = async (req, res) => {

  const client = await getClient();
  const db = client.db(dbName);
  const exams = db.collection('Exams');
  const result = await exams.deleteMany({PATIENT_ID: req.params.PATIENT_ID});
  res.status(200).json(result);
};




module.exports = {
  getExamsData,
  getExam,
  addExam,
  editExam,
  deleteExam,
  deleteExams
};
