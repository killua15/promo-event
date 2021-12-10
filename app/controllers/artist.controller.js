const { User, Artist } = require("../database/models");
const authVerify = require("../utils/authVerify");
module.exports = {
  async create(req, res) {
    const { name, logo, pictures, userId } = req.body;

    try {
      const artist = await Artist.create({
        userId,
        name,
        logo,
        pictures,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      return res.status(200).json({
        ok: true,
        message: "Artist create success!!",
      });
    } catch (err) {
      return res.status(500).json({
        ok: false,
        message: err.message,
        err,
      });
    }
  },
  async findAll(req, res) {
    // const { token } = req.headers;
    // console.log(token);
    try {
      // const veryfy = await authVerify(token)
      const artist = await Artist.findAll({
        attributes: ["id", "name"],
      });
      return res.status(200).json({
        ok: true,
        artist,
      });
    } catch (err) {
      return res.status(500).json({
        ok: false,
        message: err.message,
        err,
      });
    }
  },
  async findAllById(req, res) {
    const { id } = req.params;
    console.log(id);
    try {
      const artist = await Artist.findOne({
        where: {
          id,
        },
        attributes: ["id", "name"],
      });
      return res.status(200).json({
        ok: true,
        artist,
      });
    } catch (err) {
      return res.status(500).json({
        ok: false,
        message: err.message,
        err,
      });
    }
  },
  async update(req, res) {
    const { id } = req.params;
    const { name, logo, pictures } = req.body;
    try {
      const artist = await Artist.findOne({
        where: {
          id,
        },
      });
      if (user) {
        artist.name = name ? name : artist.name;
        artist.logo = logo ? logo : artist.logo;
        artist.pictures = pictures ? pictures : artist.pictures;

        artist.updatedAt = new Date();

        await artist.save();

        return res.status(200).json({
          ok: true,
          message: "User update success!!",
        });
      } else {
        return res.status(404).json({
          ok: false,
          message: "User not found!!",
        });
      }
    } catch (err) {
      return res.status(500).json({
        ok: false,
        message: err.message,
        err,
      });
    }
  },
};
