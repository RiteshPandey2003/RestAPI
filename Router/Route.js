const express = require("express");
const {
  getnormalData,
  postnormalData,
  putnormalData,
  deletenormalData,
  getadminData,
  postadminData,
  deleteadminData,
  putadminData,
} = require("../controllers/controller.js");
const router = express.Router();

//user Route
router.route("/").get(getnormalData).post(postnormalData);
router.route("/:id").put(putnormalData).delete(deletenormalData);

//Admin Route
router.route("/admin").get(getadminData).post(postadminData);
router.route("/admin/:id").put(putadminData).delete(deleteadminData);

module.exports = router;
