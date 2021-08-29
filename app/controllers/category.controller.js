const { Category } = require("../database/models");

module.exports = {
  async create(req, res) {
    const { name, departmentId } = req.body;
    try {
     
      await Category.create({
          departmentId,
          name,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      
      return res.status(200).json({
         ok:true,
         message:'Category create success!!'
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
      const category = await Category.findAll()
      return res.status(200).json({
        ok: true,
        category
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
        const category = await Category.findAll({
          where:{
            id,
          }
        })
        return res.status(200).json({
          ok: true,
          category
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
     const {name, departmentId} = req.body
     try {
       const category = await Department.findOne({
         where:{
           id,
         }
       })
       if(department){
        category.name = name ? name : category.name 
        category.departmentId = departmentId ? departmentId : category.departmentId 

        category.updatedAt = new Date()

         await department.save()

         return res.status(200).json({
          ok: true,
          message: "Category update success!!",
        });
       }else{
        return res.status(404).json({
          ok: false,
          message: "Category not found!!",
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
      const category = await Category.findOne({
        where:{
          id,
        }
      })
      
      if(category){
        category.destroy({
          where:{
            id,
          }
        })
        return res.status(200).json({
          ok: true,
          message:'Category delete success!!'
        });
      }else{
        return res.status(200).json({
          ok: false,
          message:'Category not found'
        });
      }
     
    } catch (error) {
      
    }
  },
};
