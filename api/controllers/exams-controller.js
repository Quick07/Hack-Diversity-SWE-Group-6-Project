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
  try {
  const client = await getClient();
  const db = client.db(dbName);
  const exams = db.collection('Exams');
  const result = await exams.find().toArray();;
  res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const getExamsByPatient = async (req, res) => {
  try {
  const client = await getClient();
  const db = client.db(dbName);
  const exams = db.collection('Exams');
  const result = await exams.find({PATIENT_ID: req.params.PATIENT_ID}).toArray();
  res.status(200).json(result);
} catch (error) {
  console.log(error);
}
};

const getExam = async (req, res) => {
  try {
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
} catch (error) {
  console.log(error);
}
};

const addExam = async (req, res) => {
  try {
  const { exam_Id, PATIENT_ID, brixia_scores, key_findings, xray_url } =
    req.body;

  const client = await getClient();
  const db = client.db(dbName);
  const exams = db.collection('Exams');
    console.log(req.body);
  const result = await exams.insertOne({
    exam_Id,
    PATIENT_ID,
    brixia_scores,
    key_findings,
    xray_url,
  });
  console.log(result);
  res.status(201).json(result.insertedId);
} catch (error) {
  console.log(error);
}
};

const editExam = async (req, res) => {
  try {
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
} catch (error) {
  console.log(error);
}
};

const deleteExam = async (req, res) => {
  try {
    const client = await getClient();
    const db = client.db(dbName);
    const exams = db.collection('Exams');
    const result = await exams.deleteOne({_id: new ObjectId(req.params._id)});
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteExams = async (req, res) => {
  try {
    const client = await getClient();
    const db = client.db(dbName);
    const exams = db.collection('Exams');
    const result = await exams.deleteMany({PATIENT_ID: req.params.PATIENT_ID});
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};




module.exports = {
  getExamsData,
  getExamsByPatient,
  getExam,
  addExam,
  editExam,
  deleteExam,
  deleteExams
};
