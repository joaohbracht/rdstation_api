const express = require("express");
const app = express();
const initRoutes = require("./routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

(async () => {
  const dbElevon = require('./db/db.elevon');
  const dbProcave = require('./db/db.procave');

  try {
    const elevon = await dbElevon.sequelize.sync();
    console.log(elevon);

    const procave = await dbProcave.sequelize.sync();
    console.log(procave);

  } catch (error) {
    console.log(error);
  }
})();

let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Running at localhost: ${port}`);
});