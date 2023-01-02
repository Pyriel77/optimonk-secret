const Secret = require("../models/secretModel.js");
const { encrypt } = require("../crypt.js");

const getAllSecrets = async (req, res) => {
  try {
    const secrets = await Secret.find({});
    return res.status(200).json({ secrets });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getSecret = async (req, res) => {
  const { hash } = req.params;

  const actualSecret = await Secret.findOne({ hash: hash });
  if (!actualSecret) {
    return res
      .status(404)
      .json({ success: false, message: "No secret found!" });
  }
  res.send(actualSecret);
};

const createSecret = async (req, res) => {
  const { secretInput, reveals } = req.body;
  const rawHashed = await encrypt(secretInput);
  const hashedSecret = rawHashed.replace(/\//g, "s");

  try {
    const secret = await Secret.create({
      hash: hashedSecret,
      secretText: secretInput,
      createdAt: Date.now(),
      expiresAt: Date.now() + 100000,
      remainingViews: reveals,
    });
    return res.status(200).json({
      secret,
      //secret: secretInput,
      //expireAfterViews: reveals,
      //expireAfter: Date.now(),
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateSecret = async (req, res) => {};

const deleteSecret = async (req, res) => {};

module.exports = {
  getAllSecrets,
  getSecret,
  createSecret,
  updateSecret,
  deleteSecret,
};
