const db = require("../db/db.procave");
const dbRD = db.rdstation;

const insertConversionRD = (req, res) => {

  let json = req.body;

  const first_date = json['leads']['first_conversion']['created_at'];
  const last_date = json['leads']['last_conversion']['created_at'];

  //split datetime
  const rd_created_split = first_date.split("T");
  const rd_created_final = rd_created_split[1];

  const rd_updated_split = last_date.split("T");
  const rd_updated_final = rd_updated_split[1]



  const createResult = dbRD.create({
    uuid: json['leads']['uuid'],
    email: json['leads']['email'],
    opportunity: json['leads']['opportunity'],

    first_date: rd_created_final,
    first_event_identifier: json['leads']['first_conversion']['content']['identificador'],
    first_channel: json['leads']['first_conversion']['conversion_origin']['channel'],
    first_source: json['leads']['first_conversion']['conversion_origin']['source '],
    first_campaign: json['leads']['first_conversion']['conversion_origin']['campaign'],

    last_date: rd_updated_final,
    last_event_identifier: json['leads']['last_conversion']['content']['identificador'],

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