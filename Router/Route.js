const express = require("express");
const {
  getnormalData,
  postnormalData,
  patchnormalData,
  putnormalData,
  deletenormalData,
  getadminData,
  postadminData,
  deleteadminData,
  putadminData,
  patchadminData,
} = require("../controllers/controller.js");
const router = express.Router();

//user ROute
router
  .route("/")
  .get(getnormalData)
  .post(postnormalData)
  .patch(patchnormalData)
  .put(putnormalData)
  .delete(deletenormalData);

//Admin Route
router
  .route("/admin")
  .get(getadminData)
  .post(postadminData)
  .patch(patchadminData)
  .put(putadminData)
  .delete(deleteadminData);

module.exports = router;
