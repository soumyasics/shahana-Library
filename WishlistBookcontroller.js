const wishlistedschema=require('./WishlistBookschema')
const wishbook=(req,res)=>{
    const wishdetails= new wishlistedschema({
        bookid:req.body.bookid,
        Studentid:req.body.Studentid,
        Date:req.body.Date
    })
    wishdetails.save()
    .then(data=>{
        res.json({
            msg:"wishlist added",
            data:data,
            status:200

        })
        })
        .catch(err=>{
            res.json({
                msg:"wishlist not added",
                err:err,
                status:300
            
        })
    })
    
}
const wishlist=(req,res)=>{
    const id=req.params.id;
    wishlistedschema.find()
    .populate('bookid')
    .populate('Studentid')
       .then(data=>{
        res.json({
            msg:'data is obtained',
            data:data
        })
    })

        .catch(err=>{
            res.json({
                msg:'data is not obtained',
                err:err

            })  
        
    })
}
module.exports={wishbook,wishlist}