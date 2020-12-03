const db = require("../db/db.procave");
const dbRD = db.rdstation;

const insertConversionRD = (req, res) => {

  let json = req.body.leads;

  const first_date = json['0']['first_conversion']['created_at'];
  const last_date = json['0']['last_conversion']['created_at'];

  //split datetime
  const rd_created_split = first_date.split("T");
  const rd_created_final = rd_created_split[0];

  const rd_updated_split = last_date.split("T");
  const rd_updated_final = rd_updated_split[0]

  const createResult = dbRD.create({
    uuid: json['0']['uuid'],
    email: json['0']['email'],
    opportunity: json['0']['opportunity'],

    first_date: rd_created_final,
    first_event_identifier: json['0']['first_conversion']['content']['identificador'],
    first_channel: json['0']['first_conversion']['conversion_origin']['channel'],
    first_source: json['0']['first_conversion']['conversion_origin']['source'],
    first_campaign: json['0']['first_conversion']['conversion_origin']['campaign'],

    last_date: rd_updated_final,
    last_event_identifier: json['0']['last_conversion']['content']['identificador'],

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