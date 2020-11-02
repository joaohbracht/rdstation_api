const db = require("../db/db.elevon");
const dbElevon = db.rdstation;

const insertConversion = (req, res) => {

  let json = req.body;

  const createResult = dbElevon.create({
    uuid: json['contact']['uuid'],
    email: json['contact']['email'],
    event_identifier: json['event_identifier'],
    event_type: json['event_type'],
    entity_type: json['entity_type'],
    origin: json['contact']['funnel']['origin']
  })
    .then(() => {
      console.log(createResult)
      res.status(200)
    })
    .catch((error) => {
      console.log(error)
      res.status(500)
    });

};

module.exports = {
  insertConversion
};