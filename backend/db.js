const mongoose = require("mongoose");
const mongoUri =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&tls=false";

const connectToMongo = async () => {
  try {
    mongoose.connect(mongoUri);
    console.log("connected to mongo db");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToMongo;
