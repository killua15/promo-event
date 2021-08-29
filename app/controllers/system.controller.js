const {System} = require('../database/models')

module.exports = {
   async findAll(req,res){
        try{
            const systems = await System.findAll({
                where:{
                    status:true
                },
                attributes:['id','name']
            })
            return res.status(200).json({
                ok:true,
                systems
            })
        }catch(err){
          return res.status(500).json({
              ok:false,
              message:err.message,
              err
          })
        }
    },
    async findOne(req,res){
        const {id} = req.params
        try{
            const system = await System.findOne({
                where:{
                    status:true,
                    id:id
                },
                attributes:['id','name']
            })
            if(!system){
                return res.status(404).json({
                    ok:false,
                    message:`No system founds with id=${id}`
                })
            }else{
                return res.status(200).json({
                    ok:true,
                    system
                })
            }
            
        }catch(err){
          return res.status(500).json({
              ok:false,
              message:err.message,
              err
          })
        }
    }
};