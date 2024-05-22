
const express = require("express")
const router = express.Router()



const staffregcontroller = require('./Staff_register_controller')
const studentregcontroller=require('./Student_register_controller')
const addbookcontroller=require('./AddBookcontroller')
const borrbookcontroller=require('./Borrowbookcontroller')
const wishbookcontroller=require('./WishlistBookcontroller')
const feedbackcontroller=require('./Feedback_controller')


router.post('/page', function (req, res) {

    res.send("welcome")

})





router.post('/staff_register', staffregcontroller.staff_register)
router.get('/staff_login',staffregcontroller.login_staff)
router.post('/stafflogin1',staffregcontroller.login_staff)
router.post('/std_register',studentregcontroller.student_register)
router.get('/std_login',studentregcontroller.login_student)
router.post('/std_login1',studentregcontroller.login_student)
router.post('/Addbook',addbookcontroller.upload, addbookcontroller.Staffaddbook)
router.get('/view',addbookcontroller.viewbook)
router.get('/viewbook/:id',addbookcontroller.details)
router.post('/bbook',borrbookcontroller.borrobooks)
router.post('/wbook',wishbookcontroller.wishbook)
router.get('/wbooklist',wishbookcontroller.wishlist)
router.post('/wbooklist2/:id',wishbookcontroller.wishlist)
router.get('/bbooklist',borrbookcontroller.borrowedlist)
router.post('/bbooklist2/:id',borrbookcontroller.borrowedlist)
router.post('/feedback_login',feedbackcontroller.feedbackfaculty)
router.get('/approval4',borrbookcontroller.approval)
router.get('/acceptedtrue',borrbookcontroller.accept)
router.post('/accept/:id',borrbookcontroller.borrowupdate)
router.post('/delete/:id',borrbookcontroller.deleteborrow)
router.post('/bbooklist2',borrbookcontroller.borrowedlist)
router.get('/viewfeedbacks',feedbackcontroller.viewfeedback)




module.exports = router;



