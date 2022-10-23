const route = require("express").Router();
const db = require("./Schema");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");




route.post("/register", async (req, res) => {
  try {
    let alreadyEmail = await db.findOne({ email: req.body.email }); //dbquery
    if (alreadyEmail) {
      return res.status(400).json("Email exist");
    }
    let passhash = await bcrypt.hash(req.body.password, 10);
    const data = new db({
      name: req.body.name,
      email: req.body.email,
      password: passhash,
      conformpassword: req.body.conformpassword,


    });
    let user = await data.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send("error");
  }

});

route.post("/login", async (req, res) => {
  try {
    let user = await db.findOne({ email: req.body.email }); //dbquery

    if (!user) {
      return res.status(400).json("Wrong credentials!");
    }

    let passwordValidation = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordValidation) {
      return res.status(400).json("Your Password Wrong!");
    }

    let accessToken = jwt.sign({ email: user.email }, "SecretKey");


    res.header("auth", accessToken).send(accessToken);
  } catch (err) {
    res.status(500).send("Wrong credentials...!");
  }
});


route.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let register;
    if (qNew) {
      register = await item.find().sort({ createdAt: -1 }).limit(5)
    } else if (qCategory) {
      register = await item.find({
        itemcategory: {
          $in: [qCategory],
        },
      });
    } else {
      register = await item.find();
    }
    res.status(200).json(register);
  }
  catch (err) {
    res.status(500).send("error");
  }
});


route.get("/registerDetails", async (req, res) => {
  try {
    const data = await db.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send({ error: "cannot fetchproductby id" });
  }
});


route.put("/register/:id", async (req, res) => {
  try {
    const updatedRegister = await item.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },

      { new: true }
    );

    res.status(200).json(updatedRegister);
  } catch (err) {
    res.status(500).json(err);
  }
});






module.exports = route;