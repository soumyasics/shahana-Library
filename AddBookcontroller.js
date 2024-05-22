const Addschema=require('./AddBookSchema')
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("image");

const Staffaddbook=(req,res)=>{

    const Addbook_details=new Addschema({

        
        title:req.body.title,
        author:req.body.author,
        isbn:req.body.isbn,
        description:req.body.description,
        image:req.file
})
    const details_Addbook=Addbook_details.save()
    .then(data=>{
        res.json({
            msg:"Book Added",
            data:data,
            status:200
        
      })
    })
        .catch(err=>{
            res.json({
                msg:"Book not Added",
                err:err,
                status:400
            })
        })
 
  }
  const viewbook=(req,res)=>{
    Addschema.find()
    .then(data=>{
      res.json({
        msg:"Data obtained",
        data:data,
        
      })
    })
      .catch(err=>{
        res.json({
          msg:"Data not obtained",
          err:err,
          
        

      })
    })
  }
    const details=(req,res)=>{
      const id= req.params.id;
      Addschema.findById(id)
      .then((data)=>{
        res.json({
          msg:"data viewed",
          data:data

        })
      })
      .catch((err)=>{
        res.json({
          msg:"data not viewed",
          err:err

        })
      })
    }
  



module.exports={Staffaddbook, upload,viewbook,details}

