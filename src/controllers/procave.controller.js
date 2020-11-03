const db = require("../db/db.procave");
const dbRD = db.rdstation;

const insertConversionRD = (req, res) => {

  let json = req.body;

  const createResult = dbRD.create({
    uuid: json['contact']['uuid'],
    email: json['contact']['email'],
    event_identifier: json['event_identifier'],
    event_type: json['event_type'],
    entity_type: json['entity_type'],
    origin: json['contact']['funnel']['origin']
  })
    .then(() => {
      console.log(createResult);
      res.status(200).send({ message: "JSON ok" });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ message: "Error to import" });
    });

};

module.exports = {
  insertConversionRD
};