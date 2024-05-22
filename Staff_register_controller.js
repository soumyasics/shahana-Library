const staff_schema = require("./Staff_register_schema")
const staff_register = (req, res) => {
    const staff_details = new staff_schema({
        Staffid: req.body.Staffid,
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
       
        Email: req.body.Email,
        Password: req.body.Password,
        Phonenumber: req.body.Phonenumber,
        Address: req.body.Address

    })
    const details_staff = staff_details.save()
        .then(data => {
            res.json({ "data": data })
        })
        .catch(err => {
            res.json({ 'err': err })

        })

}
       const login_staff = (req, res) => {


    Email = req.body.Email
    Password1 = req.body.Password
    staff_schema.findOne({ Email: Email })
        .exec()
        .then(data => {
            if (data == null) {
                res.json({
                    status: false,
                    msg: "invalid Email"

                })
            }
            else if (data.Password != Password1) {

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






module.exports = { staff_register, login_staff }