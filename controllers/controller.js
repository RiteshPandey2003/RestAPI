const Normal = require("../models/userSchema.js");
const Admin = require("../models/adminSchema.js")
//normal user data
const getnormalData = async (req, res) => {
  const allDBusers = await Normal.find({});
  return res.json(allDBusers);
};
const postnormalData = async (req, res) => {
  const body = req.body;
  console.log(req.body.username);
  const result = await Normal.insertMany(req.body)
  res.send(result);
};

const deletenormalData = async (req, res) => {
  const userId = req.params.id;

  try {
    // Use Mongoose to find and delete the user by ID
    const deletedUser = await Normal.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};
const putnormalData = async (req, res) => {
  const userid = req.params.id;
  
  const product = await Normal.findByIdAndUpdate(userid);
  if (!product) return res.status(404).send('The product with the given ID was not found.');

  res.send(product);
};


//admin data
const getadminData = async (req, res) => {
  const allDBusers = await Admin.find({});
  return res.json(allDBusers);
};
const postadminData = async (req, res) => {
  const body = req.body;
  console.log(req.body.username);
  const result = await Admin.insertMany(req.body)
  res.send(result);
};

const deleteadminData = async (req, res) => {
  const userId = req.params.id;

  try {
    // Use Mongoose to find and delete the user by ID
    const deletedUser = await Admin.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};
const putadminData = async (req, res) => {
  const userid = req.params.id;
  
  const product = await Admin.findByIdAndUpdate(userid);
  if (!product) return res.status(404).send('The product with the given ID was not found.');

  res.send(product);
};

module.exports = {
  getnormalData,
  postnormalData,
  putnormalData,
  deletenormalData,
  getadminData,
  postadminData,
  deleteadminData,
  putadminData,
};
