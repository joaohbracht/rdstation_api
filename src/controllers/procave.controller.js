const db = require("../db/db.procave");
const dbRD = db.rdstation;

const insertConversionRD = (req, res) => {

  let json = req.body;

  const timestamp = json['timestamp'];
  const rd_origin = json['contact']['funnel']['origin'];

  //split datetime
  const rd_created_split = timestamp.split("T");
  const rd_created_splith = rd_created_split[1].split(".");
  const rd_created_final = rd_created_split[0] + ' ' + rd_created_splith[0]

  //split origin
  const rd_origin_split = rd_origin.split(" | ");
  const rd_channel = rd_origin_split[0];
  const rd_source = rd_origin_split[1];

  const createResult = dbRD.create({
    uuid: json['contact']['uuid'],
    date: rd_created_final,
    event_identifier: json['event_identifier'],
    lifecycle_stage: json['contact']['funnel']['lifecycle_stage'],
    opportunity: json['contact']['funnel']['opportunity'],
    channel: rd_channel,
    source: rd_source
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