 const userModel=require('../Schema/userSchema')

const ProfileHeaderFunction=async(req,res)=>{
  console.log(req.params,"params")

try {
    const user=await userModel.findById({_id:req.params.id})
    console.log(user,"user")
    if (user) {
        res.status(200).json({message:"Api send",data:user})
    }
} catch (error) {
    res.status(404).json(error)
}
}


const UpdateManagerFunction= async(req,res)=>{
console.log(req.params,"params")
console.log(req.body,"body")

try {
  const userID = await userModel.findByIdAndUpdate(
    { _id: req.params.id },
    {
      About: req.body.aboutValue.about,
      AboutMyJob: req.body.aboutValue.What_I_love_about_my_Job,
      interestAndHobbies: req.body.aboutValue.My_Interests_and_hobbies,
    }
  );
  res.status(200).json("User has been updated",userID)
  if (userID) {
    Console.log("user has been updated")
  }
 
} catch (error) {
    
}
}


const ProfileUpdateFunction=async (req,res)=>{
  // console.log(req.params,"params")
console.log(req.body,"body")
  if (!req.body.primaryValue) {
    try {
      const userID = await userModel.findByIdAndUpdate(
        { _id: req.params.id },
        {
          PhoneNo: req.body.contactValue.mobile_phone,
          workPhone: req.body.contactValue.work_phone,
          workEmail: req.body.contactValue.work_email,
          email: req.body.contactValue.personal_email,
          
        }
      );
      res
        .status(200)
        .json({ message: 'user Updated Successfully', data: userID });
    } catch (error) {}
  }
 if (req.body.primaryValue && !req.body.contactValue&&!req.body.addressValue) {
      try {
        const userID = await userModel.findByIdAndUpdate(
          { _id: req.params.id },
          {
            firstName: req.body.primaryValue.first_name,
            lastName: req.body.primaryValue.last_name,
            MiddleName: req.body.middle_name,
            Gender: req.body.primaryValue.gender,
            DOB: req.body.primaryValue.DOB,
            BloodGroup: req.body.primaryValue.marital_status,
            physicalHandicaped: req.body.primaryValue.physically_handicapped,
          }
        );
        res
          .status(200)
          .json({ message: 'user Updated Successfully', data: userID });
      } catch (error) {}
  }
 if (!req.body.primaryValue&&!req.body.contactValue&&req.body.addressValue) {
      try {
        console.log("true")
        const userID = await userModel.findByIdAndUpdate(
          { _id: req.params.id },
          {
            currentAddress: req.body.addressValue.current_address,
            permanentAddress: req.body.addressValue.permanent_address,

          }
        );

        res
          .status(200)
          .json({ message: 'user Updated Successfully', data: userID });
      } catch (error) {}
 
 
 }
 if (
   !req.body.primaryValue &&
   !req.body.contactValue &&
   !req.body.addressValue&&
   req.body.experienceValue
 ) {
   try {
 
     const userID = await userModel.findByIdAndUpdate(
       { _id: req.params.id },
       {
         Experience: req.body.experienceValue.experience,
         
       }
     );

     res
       .status(200)
       .json({ message: 'user Updated Successfully', data: userID });
   } catch (error) {}
 }
}
module.exports = {
  ProfileHeaderFunction,
  UpdateManagerFunction,
  ProfileUpdateFunction,
};