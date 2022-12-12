 const userModel=require('../Schema/userSchema')

const ProfileHeaderFunction=async(req,res)=>{
try {
    const user=await userModel.find()
    if (user) {
        res.status(200).json("Your Data are Send")
    }
} catch (error) {
    res.status(404).json(error)
}
}


const UpdateManagerFunction= async(req,res)=>{
console.log(req.params,"params")
try {
  const userID= await userModel.findByIdAndUpdate({_id:req.params.id},req.body)
  res.status(200).json("User has been updated")
 
} catch (error) {
    
}
}


const ProfileUpdateFunction=async (req,res)=>{
try {
    const userID=await userModel.findById()
} catch (error) {
    
}
}
module.exports = {
  ProfileHeaderFunction,
  UpdateManagerFunction,
  ProfileUpdateFunction,
};