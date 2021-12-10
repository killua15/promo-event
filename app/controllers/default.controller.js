const { name, description, version, author } = require("../../package.json");
module.exports = {
  default(req, res) {
    res.status(200).json({
      name,
      description,
      version,
      author,
    });
  },
};
