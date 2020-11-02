const express = require("express");
const app = express();
const initRoutes = require("./routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

(async () => {
  const dbElevon = require('./db/db.elevon');

  try {
    const result = await dbElevon.sequelize.sync();
    console.log(result);
    /* dbElevon.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    }); */
  } catch (error) {
    console.log(error);
  }
})();

let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Running at localhost: ${port}`);
});