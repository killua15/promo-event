const { User,System,System_User} = require("../database/models");
const authVerify = require('../utils/authVerify')
module.exports = {
  async create(req, res) {

    const { name, lastname,username,password,email,movil } = req.body;
    try {
     
      await User.create({
        name, lastname,username,password,email,movil,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      
      return res.status(200).json({
         ok:true,
         message:'User create success!!'
      })
    } catch (err) {
      return res.status(500).json({
        ok: false,
        message: err.message,
        err,
      });
    }
  },
  async findAll (req, res) {
    const {token} = req.headers
    console.log(token)
    try {
     // const veryfy = await authVerify(token)
      const user = await User.findAll({
        attributes: ['id', 'name'],
        include: [{
          model: System,
          as: 'systems',
          attributes:['updatedUser','id','name'],
          through: {
            attributes:[]
          }
        }]
      })
      return res.status(200).json({
        ok: true,
        user
      });
    } catch (err) {
      return res.status(500).json({
        ok: false,
        message: err.message,
        err,
      });
    }
  },
  async findAllById (req, res) {
    const {id} = req.params
      console.log(id)
      try {
        const user = await user.findOne({
          where:{
            id,
          }
        })
        return res.status(200).json({
          ok: true,
          user
        });
      } catch (err) {
        return res.status(500).json({
          ok: false,
          message: err.message,
          err,
        });
      }
  },
  async update (req, res) {
    const {id} = req.params
     const {name, lastname,username,password,email,movil} = req.body
     try {
       const user = await User.findOne({
         where:{
           id,
         }
       })
       if(user){
        user.name = name ? name : user.name 
        user.lastname = lastname ? lastname : user.lastname 
        user.username = username ? username : user.username 
        user.password = password ? password : user.password 
        user.email = email ? email : user.email 
        user.movil = movil ? movil : user.movil 

        user.updatedAt = new Date()

         await user.save()

         return res.status(200).json({
          ok: true,
          message: "User update success!!",
        });
       }else{
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
