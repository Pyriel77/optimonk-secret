const bcrypt = require("bcrypt");

const encrypt = async (text) => {
  const hash = await bcrypt.hash(text, 10);
  return hash;
};

module.exports = { encrypt };
