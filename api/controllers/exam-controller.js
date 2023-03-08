const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://admin:pass@techdive.uhfnhov.mongodb.net/test';
const dbName = 'Exams';

const client = new MongoClient(uri);

const getExamData = async (req, res) => {
      await client.connect();
      const db = client.db(dbName);
      const exams = db.collection('Exams');
      const result = await exams.find().toArray();
      res.status(200).json(result);
      await client.close();
  };

  module.exports = {
    getExamData,
  };