const { User,Picture } = require("../database/models");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {authConfig} = require('../../config'); 
module.exports = {
  async signin(req, res) {
    const { email, password} = req.body;
    try {
      if(!email||!password){
        return res.status(401).json({
            ok: false,
            message: "User or email not be empty!!",
          });
      }

      const findUser = await User.findOne({
         where:{
             email,
             status:true
         }
      })
      if(!findUser){
        return res.status(401).json({
            ok: false,
            message: `Unautorize1 user ${findUser.email}!!`,
          });
      }
      console.log(findUser.password)
      if(!bcrypt.compareSync(password, findUser.password)){
        return res.status(401).json({
            ok: false,
            message: `Unautorize2 user ${findUser.email}!!`,
          });
      }
      const user = {
          name:findUser.name,
          email:findUser.email,
          lastname:findUser.lastname,
          username:findUser.username,
          movil:findUser.movil,

      }
      const token = jwt.sign(user,authConfig.secret,{
          expiresIn:authConfig.expires
      }) 

      return res.status(200).json({
        ok: true,
        user,
        token: token
      });
    } catch (err) {
      return res.status(500).json({
        ok: false,
        message: err.message,
        err,
      });
    }
  },
};
