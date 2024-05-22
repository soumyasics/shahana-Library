const login_schema = require('./Feedback_schema')
const feedbackfaculty = (req, res) => {

    const feedback_details = new login_schema({
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        Gender: req.body.Gender,
        Email: req.body.Email,
        Password: req.body.Password,
        bookname:req.body.bookname,
        Comment: req.body.Comment


    })
    feedback_details.save()

       
    .then(data=>{
        res.json({
            msg:"feedback send",
            data:data,
            status:200

        })
        })
        .catch(err=>{
            res.json({
                msg:"feedback not send",
                err:err,
                status:300
            
        })
    })

}
const viewfeedback=(req,res)=>{
  
    login_schema.find()
   .then(data=>{
    res.json({
        msg:"data obtained",
        data:data
    })
   })
   .catch(err=>{
    res.json({
        msg:"data not obtained",
        err:err
    })
   })
    
       
    

}
module.exports = { feedbackfaculty ,viewfeedback}
