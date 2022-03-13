const router = require("express").Router();
const Form = require("../models/FormModel");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    cb(null, req.body.name + " " + file.originalname);
  },
});

const setLimit = 1024 * 1024 * 2;

const uploadFile = multer({
  storage: storage,
  limits: {
    fileSize: setLimit,
  },
  fileFilter: function (req, file, cb) {
    if (
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png"
    ) {
      cb(null, true);
    } else {
      cb("Only images are allowed");
    }
  },
}).single("photo");

router.post("/form", uploadFile, async (req, res) => {
  console.log(req.body.path);
  try {
    const newForm = new Form({
      name: req.body.name,
      email: req.body.email,
      photo: req.file.path,
      phone: req.body.phone,
      course: req.body.course,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
    });
    await newForm.save();
    res.status(200).json(newForm);
  } catch (error) {
    res.status(500).json(error);
  }
});

// ! SEE THE STATUS OF THE APPLICATION FORM
router.get("/form", async (req, res) => {
  try {
    const form = await Form.findOne({ name: req.body.name });
    res.status(200).json(form);
    console.log(form.status);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
