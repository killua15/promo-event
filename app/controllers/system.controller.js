const { System } = require("../database/models");

module.exports = {
  async findAll(req, res) {
    try {
      const systems = await System.findAll({
        where: {
          status: true,
        },
        attributes: ["id", "name"],
      });
      return res.status(200).json({
        ok: true,
        systems,
      });
    } catch (err) {
      return res.status(500).json({
        ok: false,
        message: err.message,
        err,
      });
    }
  },
  async findOne(req, res) {
    const { id } = req.params;
    try {
      const system = await System.findOne({
        where: {
          status: true,
          id: id,
        },
        attributes: ["id", "name"],
      });
      if (!system) {
        return res.status(404).json({
          ok: false,
          message: `No system founds with id=${id}`,
        });
      } else {
        return res.status(200).json({
          ok: true,
          system,
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
  async findAllById(req, res) {
    const { id } = req.params;
    console.log(id);
    try {
      const system = await System.findAll({
        where: {
          id,
        },
      });
      return res.status(200).json({
        ok: true,
        system,
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
    const { name, status, updatedUser } = req.body;
    try {
      const system = await System.findOne({
        where: {
          id,
        },
      });
      if (system) {
        system.name = name ? name : system.name;
        system.status = status ? status : findProduct.status;
        system.count = count ? count : findProduct.count;
        system.updatedUser = updatedUser
          ? updatedUser
          : findProduct.updatedUser;
        system.updatedAt = new Date();

        await system.save();

        return res.status(200).json({
          ok: true,
          message: "System update success!!",
        });
      } else {
        return res.status(404).json({
          ok: false,
          message: "System not found!!",
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
  async delete(req, res) {
    const { id } = req.params;
    try {
      const system = await System.findOne({
        where: {
          id,
        },
      });
      console.log(system);
      if (system) {
        product.destroy({
          where: {
            id,
          },
        });
        return res.status(200).json({
          ok: true,
          message: "System delete success!!",
        });
      } else {
        return res.status(200).json({
          ok: false,
          message: "Product not found",
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
