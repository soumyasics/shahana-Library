
const bookschema = require('./Borrowbookschema')
const borrobooks = (req, res) => {
const borrdetails = new bookschema({
        bookid: req.body.bookid,
        Studentid: req.body.Studentid,
        Date: req.body.Date
    })
     borrdetails.save()
         .then(data => {
               res.json({
                msg: "data saved success",
                data: data,
                status: 200
            })
        })
         .catch(err => {
                 res.json({
                     msg: "data not saved",
                     err: err,
                     status: 300
                    })
                 })

}
const borrowedlist=(req,res)=>{
    const id= req.params.id;
       bookschema.find()
    .populate('bookid')
    .populate('Studentid')
    .then(data=>{
        res.json({
            msg:'data is obtained',
            data:data,
            status:200
        })

    })
    .catch(err=>{
     res.json({
            msg:'data is not obtained',
            err:err,
            status:300

        })
    })
      
}
const approval=(req,res)=>{
    const id=req.params.id
     bookschema.find({approve:false})
    .populate('bookid')
    .populate('Studentid')
    .then(data=>{
        res.json({
            msg:'data is obtained',
            data:data,
            status:200
        })

    })
    .catch(err=>{
     res.json({
            msg:'data is not obtained',
            err:err,
            status:300

        })
    })

}
const accept=(req,res)=>{
    const id=req.params.id
    bookschema.find({approve:true})
    .populate('bookid')
    .populate('Studentid')
    .then(data=>{
        res.json({
            msg:'data is obtained',
            data:data,
            status:200
        })

    })
    .catch(err=>{
     res.json({
            msg:'data is not obtained',
            err:err,
            status:300

        })
    })

}
const borrowupdate=(req,res)=>{
    const id=req.params.id
    console.log("id",id);
    bookschema.findByIdAndUpdate({_id:id},{approve:true})
    .then((data)=>{
        console.log(data);
        res.json({
            msg:"book approved",
            data:data,
            status:200
        })
    })
    .catch((err)=>{
        res.json({
            msg:"book not approved",
            err:err,
            status:300
        })
    })
}
const deleteborrow=(req,res)=>{
    const id=req.params.id
    bookschema.findByIdAndDelete(id)
    .then((data)=>{
        res.json({
            msg:"borrow deleted",
            data:data
        })
    })
    .catch((err)=>{
        res.json({
            mdg:"borrow not deleted",
            err:err
        })
    })
}





module.exports = { borrobooks ,borrowedlist,approval,accept,borrowupdate,deleteborrow}
