const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");
connectToMongo();

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
/* app.get("/", (req, res) => {
  res.send("Hello Sandy!");
});
app.get("/api/v1/login", (req, res) => {
  res.send("Hello login!");
}); */
//Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
app.listen(port, () => {
  console.log(`iNotebook backend listening on port http://localhost:${port}`);
});
