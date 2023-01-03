const {
  createUser,
  getAll,
  getById,
  updateUser,
  deleteUser,
} = require("../repositories/user.repository");

const bcrypt = require("bcrypt");

exports.create = async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashPassword;
    const user = await createUser(req.body);
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.get = async (req, res) => {
  try {
    const skip = Number(req?.query?.skip) || 0;
    const take = Number(req?.query?.take) || 20;
    const users = await getAll(skip, take);
    res.status(200).send(users);
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.getId = async (req, res) => {
  try {
    const user = await getById(req.params.id);
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.update = async (req, res) => {
  try {
    const user = await updateUser(req.params.id, req.body);
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.exclude = async (req, res) => {
  try {
    await deleteUser(req.params.id);
    res.status(200).send("excluido com sucesso!");
  } catch (error) {
    res.status(404).send(error);
  }
};
