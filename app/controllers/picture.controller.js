const { Picture } = require("../database/models");

module.exports = {
  async create(req, res) {
    const { name, productId,url} = req.body;
    try {
      await Picture.create({
        productId,
        name,
        url,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      return res.status(200).json({
        ok: true,
        message: "Picture create success!!",
      });
    } catch (err) {
      return res.status(500).json({
        ok: false,
        message: err.message,
        err,
      });
    }
  },
  // async findAll(req, res){

  // },
  async update(req, res){
     const {id} = req.params
     const {name,url} = req.body
     try {
       const findPicture = await Picture.findOne({
         where:{
           id,
         }
       })
       if(findPicture){
         findPicture.name = name
         findPicture.url = url ? url : findPicture.url 
         findPicture.updatedAt = new Date()
         await findPicture.save()

         return res.status(200).json({
          ok: true,
          message: "Picture update success!!",
        });
       }else{
        return res.status(404).json({
          ok: false,
          message: "Picture not found!!",
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
  async delete(req,res){
    const {id} = req.params
    try {
      const pictures = await Picture.findOne({
        where:{
          id,
        }
      })
      console.log(pictures)
      if(pictures){
        pictures.destroy({
          where:{
            id,
          }
        })
        return res.status(200).json({
          ok: true,
          message:'Picture delete success!!'
        });
      }else{
        return res.status(200).json({
          ok: false,
          message:'Picture not found'
        });
      }
     
    } catch (error) {
      
    }
  },
  async findAllByProduct(req,res){
      const {productId} = req.params
      console.log(productId)
      try {
        const pictures = await Picture.findAll({
          where:{
            productId,
          },
          attributes:['id','name','url']
        })
        return res.status(200).json({
          ok: true,
          pictures
        });
      } catch (err) {
        return res.status(500).json({
          ok: false,
          message: err.message,
          err,
        });
      }
  }
};
