const { Event, Artist, Location } = require("../database/models");
const authVerify = require("../utils/authVerify");
module.exports = {
  async create(req, res) {
    console.log(req);
    const {
      name,
      flayer,
      place,
      address,
      cover,
      description,
      artistId,
      latitude,
      longitude,
      icon_map,
    } = req.body;

    try {
      const event = await Event.create({
        artistId: +artistId,
        name,
        flayer,
        place,
        address,
        cover,
        description,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      const location = await Location.create({
        idEvent: +event.id,
        latitude,
        longitude,
        icon_map,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      return res.status(200).json({
        ok: true,
        message: "Event create success!!",
      });
    } catch (err) {
      return res.status(500).json({
        ok: false,
        // message: err.message,
        message: req.body,
        err,
      });
    }
  },
  async findAll(req, res) {
    // const { token } = req.headers;
    // console.log(token);
    try {
      // const veryfy = await authVerify(token)
      const event = await Event.findAll({
        attributes: [
          "id",
          "name",
          "flayer",
          "place",
          "address",
          "cover",
          "description",
        ],
        include: [
          {
            model: Location,
            as: "location",
            attributes: ["latitude", "longitude", "icon_map"],
          },
        ],
      });
      return res.status(200).json({
        ok: true,
        event,
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
      const event = await Event.findOne({
        where: {
          id,
        },
        attributes: [
          "id",
          "name",
          "flayer",
          "place",
          "address",
          "cover",
          "description",
        ],
        include: [
          {
            model: Location,
            as: "location",
            attributes: ["latitude", "longitude", "icon_map"],
          },
        ],
      });
      return res.status(200).json({
        ok: true,
        event,
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
    const {
      name,
      flayer,
      place,
      address,
      cover,
      description,
      latitude,
      longitude,
      icon_map,
    } = req.body;
    try {
      const event = await Event.findOne({
        where: {
          id,
        },
      });
      const location = await Location.findOne({
        where: {
          idEvent: id,
        },
      });
      if (event) {
        event.name = name ? name : event.name;
        event.flayer = flayer ? flayer : event.flayer;
        event.address = address ? address : event.address;
        event.place = place ? place : event.place;
        event.description = description ? description : event.description;
        event.cover = cover ? cover : event.cover;
        location.icon_map = icon_map ? icon_map : location.icon_map;
        location.latitude = latitude ? latitude : location.latitude;
        location.longitude = longitude ? longitude : location.longitude;
        event.updatedAt = new Date();
        location.updatedAt = new Date();

        await event.save();
        await location.save();

        return res.status(200).json({
          ok: true,
          message: "User update success!!",
        });
      } else {
        return res.status(404).json({
          ok: false,
          message: "Event not found!!",
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
