const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/userRegister");

const User = mongoose.model("user", {
  id: String,
  name: String,
  mobile: Number,
  password: String,
  dob: String,
  mothertongue: String,
  email: String,
  sex: String,
  about: String,
  image: String,
});
module.exports = {
  User,
};
