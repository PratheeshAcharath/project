const router = require("express").Router();
const BatchManager = require("../models/BatchManager");
const Course = require("../models/Course");
const nodemailer = require("nodemailer");
const User = require("../models/User");
const bcrypt = require("bcrypt");

// ! ADD NEW BATCH MANAGER
router.post("/bm", async (req, res) => {
  const newBM = new BatchManager(req.body);
  try {
    const savedBM = await newBM.save();
    res.status(200).json(savedBM);
  } catch (error) {
    res.status(500).json(error);
  }
});

// !ASSIGN EMAIL AND PASSWORD FOR BATCH MANAGER
router.post("/credential/:id", async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const bm = await BatchManager.findById({ _id: id });
  if (!bm) {
    return res.status(400).send("Batch manager not found");
  }
  try {
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: password,
    });
    await newUser.save((err, user) => {
      if (error) {
        return res.status(400).json("Something went wrong");
      } else {
        var tranporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "adminictakid@gmail.com",
            pass: "admin@ictak",
          },
        });

        let mailOptions = {
          from: "adminictakid@gmail.com", //this is email is not created yet
          to: req.body.email,
          subject: "Account Credentials",
          text: "Your password and Email for login",
          html: `Your email: ${req.body.email} & Your password: ${req.body.password}`,
        };

        tranporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            res.status(400).json("Something went wrong");
          } else {
            return res.status(200).json({ user });
          }
        });
      }
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// ! UPDATE BATCH MANAGER
router.put("/bm/:id", async (req, res) => {
  try {
    const Bm = await BatchManager.findById(req.params.id);
    const updatedBM = await BatchManager.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedBM);
  } catch (error) {
    res.status(500).json(error);
  }
});

// ! DELETE BATCH MANAGER
router.delete("/bm/:id", async (req, res) => {
  try {
    const Bm = await BatchManager.findById(req.params.id);
    await Bm.delete();
    res.status(200).json("Details deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

//!GET ONE BATCH MANAGER
router.get("/bm/:id", async (req, res) => {
  try {
    const Bm = await Post.findById(req.params.id);
    res.status(200).json(Bm);
  } catch (err) {
    res.status(500).json(err);
  }
});

//!GET ALL BATCH MANAGER
router.get("/bm", async (req, res) => {
  try {
    const Bm = await BatchManager.find();
    res.status(200).json(Bm);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ! CREATE NEW COURSE
router.post("/course", async (req, res) => {
  const newCourse = new Course(req.body);
  try {
    const savedCourse = await newCourse.save();
    res.status(200).json(savedCat);
  } catch (error) {
    res.status(500).json(error);
  }
});

// ! UPDATE COURSE
router.put("/course/:id", async (req, res) => {
  try {
    const cour = await Course.findById(req.params.id);
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCourse);
  } catch (error) {
    res.status(500).json(error);
  }
});

// ! DELETE COURSE
router.delete("/course/:id", async (req, res) => {
  try {
    const cour = await Course.findById(req.params.id);
    await cour.delete();
    res.status(200).json("Details deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

// ! VIEW ALL COURSE
router.get("/course", async (req, res) => {
  try {
    const cour = await Course.find();
    res.status(200).json(cour);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
