const { User, Artist } = require("../database/models");
const authVerify = require("../utils/authVerify");
module.exports = {
  async create(req, res) {
    const { name, lastname, email, password, movile, phone, role } = req.body;

    try {
      await User.create({
        name,
        lastname,
        password,
        email,
        movile,
        phone,
        role,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      return res.status(200).json({
        ok: true,
        message: "User create success!!",
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
      const user = await User.findAll({
        attributes: ["id", "name", "email", "movile", "phone"],
        include: [
          {
            model: Artist,
            as: "artists",
            attributes: ["id", "name"],
          },
        ],
      });
      return res.status(200).json({
        ok: true,
        user,
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
      const user = await User.findOne({
        where: {
          id,
        },
        attributes: ["id", "name", "email", "movile", "phone"],
        include: [
          {
            model: Artist,
            as: "artists",
            attributes: ["id", "name"],
          },
        ],
      });
      return res.status(200).json({
        ok: true,
        user,
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
    const { name, lastname, username, password, email, movile, phone, role } =
      req.body;
    try {
      const user = await User.findOne({
        where: {
          id,
        },
      });
      if (user) {
        user.name = name ? name : user.name;
        user.lastname = lastname ? lastname : user.lastname;
        user.username = username ? username : user.username;
        user.password = password ? password : user.password;
        user.email = email ? email : user.email;
        user.movile = movile ? movile : user.movile;
        user.phone = phone ? phone : user.phone;
        user.role = role ? role : user.role;
        user.updatedAt = new Date();

        await user.save();

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
