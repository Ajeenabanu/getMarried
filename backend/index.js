const express = require("express");
const app = express();

app.use(express.static("public"));
app.use("/image", express.static("image"));

app.listen(5000, () => {
  console.log("listening port 5000");
});

const cors = require("cors");
app.use(cors());

app.use(express.json());
const model = require("./model");

app.post("/userRegister", async (req, res) => {
  let user = model.User;
  let result = await user.create({
    id: req.body.id,
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
  let user = model.User;
  let result = await user.findOneAndUpdate(
    { _id: req.body.userId },
    {
      dob: req.body.dob,
      mothertongue: req.body.mothertongue,
      email: req.body.email,
      sex: req.body.sex,
      about: req.body.about,
      image: req.body.image,
    }
  );
  res.send("updated succesfully");
});

app.post("/login", async (req, res) => {
  let data = {
    mobile: req.body.mobile,
    password: req.body.password,
  };
  let user = model.User;
  let loginUser = await user.findOne({ mobile: data.mobile }).exec();
  if (loginUser.password === req.body.password) {
    loginData = {
      message: "login succesfully",
      userId: loginUser._id,
    };
    res.send(loginData);
  } else {
    res.send("login fail");
  }
});

app.get("/get-allProfiles", async (req, res) => {
  let user = model.User;
  let profile = await user.find().then((result) => {
    if (result) {
      return {
        statusCode: 200,
        profiles: result,
      };
    } else {
      return {
        statusCode: 404,
        message: "no data is available",
      };
    }
  });
  let allProfiles = profile.profiles;
  res.send(allProfiles);
});

const getAProfile = (id) => {
  return model.User.findOne({
    id,
  }).then((result) => {
    if (result) {
      return {
        statusCode: 200,
        Person: result,
      };
    } else {
      return {
        statusCode: 404,
        message: "no data is available",
      };
    }
  });
};

app.get("/get-a-Profile/:id", (req, res) => {
  getAProfile(req.params.id).then((result) => {
    var image = "http://localhost:5000/image/" + result.Person.image;
    result.Person.image = image;
    console.log(image);
    res.status(result.statusCode).json(result);
  });
});
