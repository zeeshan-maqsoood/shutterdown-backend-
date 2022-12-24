const addClientSchema=require('../Schema/AddClientSchema')

const ClientCalenderViewFunction=async(req,res)=>{
console.log(req.params,"params")
try {
    const user=await addClientSchema.find({userID:req.params.id})
  console.log(user,"userrrrrrr")
    res.status(200).json(user)
    
} catch (error) {
    console.log(error)
}
}



module.exports={ClientCalenderViewFunction}