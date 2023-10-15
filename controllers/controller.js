//normal user data
const getnormalData = async (req, res) => {
  res.status(200).json({ msg: " get normal  user Route" });
};
const postnormalData = async (req, res) => {
  res.status(200).json({ msg: " post normal  user Route" });
};
const patchnormalData = async (req, res) => {
  res.status(200).json({ msg: " patch normal  user Route" });
};
const deletenormalData = async (req, res) => {
  res.status(200).json({ msg: " delete normal  user Route" });
};
const putnormalData = async (req, res) => {
  res.status(200).json({ msg: " put  normal  user Route" });
};

//admin data
const getadminData = async (req, res) => {
  res.status(200).json({ msg: "get admin Route" });
};
const postadminData = async (req, res) => {
  res.status(200).json({ msg: " post normal admin Route" });
};
const patchadminData = async (req, res) => {
  res.status(200).json({ msg: " patch normal admin Route" });
};
const deleteadminData = async (req, res) => {
  res.status(200).json({ msg: " delete normal admin Route" });
};
const putadminData = async (req, res) => {
  res.status(200).json({ msg: " put  normal admin Route" });
};

module.exports = {
  getnormalData,
  postnormalData,
  patchnormalData,
  putnormalData,
  deletenormalData,
  getadminData,
  postadminData,
  patchadminData,
  deleteadminData,
  putadminData,
};
