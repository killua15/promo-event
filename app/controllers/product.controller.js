const { Product,Picture } = require("../database/models");

module.exports = {
  async create(req, res) {
    const { name, categoryId,price,description,count} = req.body;
    try {
      await Product.create({
        categoryId,
        name,
        price,
        description,
        count,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      return res.status(200).json({
        ok: true,
        message: "Product create success!!",
      });
    } catch (err) {
      return res.status(500).json({
        ok: false,
        message: err.message,
        err,
      });
    }
  },
  async findAll (req, res) {
    try {
      const products = await Product.findAll({
        include:[{
          model:Picture,
          as:'pictures'
        }]
      })
      return res.status(200).json({
        ok: true,
        products
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
        const product = await Product.findAll({
          where:{
            id,
          },
          attributes:['id','name','count','price'],
          include:[{
            model:Picture,
            as:'pictures'
          }]
        })
        return res.status(200).json({
          ok: true,
          product
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
     const {name,categoryId,count,price,description,} = req.body
     try {
       const findProduct = await Product.findOne({
         where:{
           id,
         }
       })
       if(findProduct){
        findProduct.name = name ? name : findProduct.name 
        findProduct.categoryId = categoryId ? categoryId : findProduct.categoryId 
        findProduct.count = count ? count : findProduct.count 
        findProduct.name = price ? price : findProduct.price 
        findProduct.name = description ? description : findProduct.description 
      
        findProduct.updatedAt = new Date()

         await findProduct.save()

         return res.status(200).json({
          ok: true,
          message: "Product update success!!",
        });
       }else{
        return res.status(404).json({
          ok: false,
          message: "Product not found!!",
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
  async delete (req, res) {
    const {id} = req.params
    try {
      const product = await Product.findOne({
        where:{
          id,
        }
      })
      console.log(product)
      if(product){
        product.destroy({
          where:{
            id,
          }
        })
        return res.status(200).json({
          ok: true,
          message:'Product delete success!!'
        });
      }else{
        return res.status(200).json({
          ok: false,
          message:'Product not found'
        });
      }
     
    } catch (error) {
      
    }
  },
};
