const getUser = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'API is working.',
  });
};

const createUser = async (req, res) => {
  // step one collect data from request
  // step two store it in data base
  // confirm that its stored in the data base
  // confirm that its the right response


  // NOTES FOR MEETING:
  // Meeting w/ mentor at 4 pm tmr to finish the back-end of the create page
  // currently have html responses to confirm link between the fron and back end
  
  // be able to fetch json data
  const { parcel } = req.body
  if (!parcel) {
    return res.status(400).send({
      status: 'failed'})
  }

  res.status(200).send({
    status: 'recieved'
  })

  // return res.status(200).json({
  //   success: true,
  //   message: 'API is working.',
  // });
};

module.exports = {
  getUser, createUser
};
