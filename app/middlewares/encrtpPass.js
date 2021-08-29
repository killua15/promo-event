const bcrypt = require('bcrypt'); 
const {authConfig} = require('../../config'); 
module.exports = (req,res,next) => {
   const {password} = req.body

   const salt = bcrypt.genSaltSync(Number(authConfig.rounds))
   const hash = bcrypt.hashSync(password,salt)
   req.body.password = hash
   next();
}