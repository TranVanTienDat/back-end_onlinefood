const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const auth = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: String,
  address: String,
  phoneNumber: String,
});
const userDB = mongoose.model("userDB", auth);
module.exports = userDB;
