const { Department,Category } = require("../database/models");

module.exports = {
  async create(req, res) {
    const { name, companyId } = req.body;
    try {
      await Department.create({
        name,
        companyId,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return res.status(200).json({
         ok:true,
         message:'Department create success!!'
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
    try {
      const products = await Department.findAll()
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
        const product = await Department.findAll({
          where:{
            id,
          },
          attributes:['id','name'],
          include:[{
            model:Category,
            as:'categories',
            attributes:['id','name'],
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
     const {name,companyId} = req.body
     try {
       const department = await Department.findOne({
         where:{
           id,
         }
       })
       if(department){
        department.name = name ? name : findProduct.name 
        department.companyId = categoryId ? categoryId : findProduct.categoryId 
        department.updatedAt = new Date()

         await findProduct.save()

         return res.status(200).json({
          ok: true,
          message: "Department update success!!",
        });
       }else{
        return res.status(404).json({
          ok: false,
          message: "Department not found!!",
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
      const department = await Department.findOne({
        where:{
          id,
        }
      })
      
      if(department){
        department.destroy({
          where:{
            id,
          }
        })
        return res.status(200).json({
          ok: true,
          message:'Department delete success!!'
        });
      }else{
        return res.status(200).json({
          ok: false,
          message:'Department not found'
        });
      }
     
    } catch (error) {
      
    }
  },
};
