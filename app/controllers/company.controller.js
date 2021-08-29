const { Company } = require("../database/models");

module.exports = {
  async create(req, res) {
    const { name, systemId,address,url,phone,company_pic } = req.body;
    try {
     
      await Company.create({
          systemId,
          name,
          address,
          url,
          phone,
          company_pic,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      
      return res.status(200).json({
         ok:true,
         message:'Company create success!!'
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
      const company = await Company.findAll()
      return res.status(200).json({
        ok: true,
        company
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
        const company = await Company.findAll({
          where:{
            id,
          }
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
     const {name, systemId,address,url,phone,company_pic} = req.body
     try {
       const department = await Department.findOne({
         where:{
           id,
         }
       })
       if(department){
        department.name = name ? name : findProduct.name 
        department.systemId = systemId ? systemId : department.systemId 
        department.companyId = categoryId ? categoryId : department.categoryId 
        department.address = address ? address : department.address 
        department.companyId = url ? url : department.url 
        department.companyId = phone ? phone : department.phone 
        department.companyId = phone ? phone : department.phone 

        department.updatedAt = new Date()

         await department.save()

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
      const department = await Company.findOne({
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
