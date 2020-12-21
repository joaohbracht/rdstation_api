const express = require("express");
const app = express();
const initRoutes = require("./routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

(async () => {
  const dbExample = require('./db/db.example');

  try {
    const example = await dbExample.sequelize.sync();
    console.log(example);

  } catch (error) {
    console.log(error);
  }
})();

let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Running at localhost: ${port}`);
});