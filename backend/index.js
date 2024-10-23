const express = require("express");
const app = express();
const port = 4000;

const mongoDB = require("./db.js");
mongoDB();

const cors = require("cors");

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/api", require("./routes/CreateUser.js"));
app.use("/api", require("./routes/Auth.js"));

app.use("/api", require("./routes/Profile.js"));

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
