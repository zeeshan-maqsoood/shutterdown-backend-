const addClientSchema=require('../Schema/AddClientSchema')

const ClientCalenderViewFunction=async(req,res)=>{
console.log(req.params,"params")
try {
    const user=await addClientSchema.findOne({userID:req.params.id})
    console.log(user.events.map((data)=>data.dates.getMonth()),"user")
    
    
} catch (error) {
    
}
}



module.exports={ClientCalenderViewFunction}