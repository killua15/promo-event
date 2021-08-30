const jwt = require('jsonwebtoken')
const {authConfig} = require('../../config'); 

module.exports = async (token) =>{
    var decoded = await jwt.verify(token, authConfig.secret);
    console.log(decoded)
}