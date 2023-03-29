const express = require("express");
const app = express();

app.listen(5000, () => {
  console.log("it work");
});

const cors = require("cors");
app.use(cors());

app.use(express.json());
const model = require("./model");

app.post("/userRegister", async (req, res) => {
  console.log(req.body);
  let user = model.User;
  console.log(user);
  let result = await user.create({
    name: req.body.uname,
    mobile: req.body.mobile,
    password: req.body.password,
  });
  objData = {
    message: "registration successful",
    userId: result._id,
  };
  res.send(objData);
});

app.post("/updateProfile", async (req, res) => {
  console.log(req.body);
  let user = model.User;
  let result = await user.findOneAndUpdate(
    { _id: req.body.userId },
    {
      dob: req.body.dob,
      denomination: req.body.denomination,
      mothertongue: req.body.mothertongue,
      email: req.body.email,
    }
  )
  let response=res.send("updated succesfully");
  console.log(response)
});
