const student_register_schema=require("./Student_register_schema")
const student_register=(req,res)=>{
    const student_details=new student_register_schema({
        studentname:req.body.studentname,
        Rollno:req.body.Rollno,
        class:req.body.class,
        email:req.body.email,
        password:req.body.password
        
    })
    const details_student=student_details.save()
    .then(data=>{
        res.json({'data':data})
    })
    .catch(err=>{
        res.json({'err':err})
    })
}
    const login_student=(req,res)=>{

        email=req.body.email
        password1=req.body.password
        student_register_schema.findOne({email:email})
        .exec()
        .then(data => {
            if (data == null) {
                res.json({
                    status: false,
                    msg: "invalid Email"

                })
            }
            else if (data.password != password1) {

                res.json({
                    status: false,
                    msg: "incorrect password"

                })
            }
            else {
                res.json({
                    status: true,
                    msg: "login succesfull",
                    Data: data
                })
            }
        })
        .catch(err => {
            res.json({ 'err': err })

        })
        

}

    

module.exports={student_register , login_student}