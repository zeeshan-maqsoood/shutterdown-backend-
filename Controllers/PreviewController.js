 
 const AddClientSchema=require("../Schema/AddClientSchema")
 const dummySchema=require("../Schema/DummySchema")
 const PreviewClientFunction=async(req,res)=>{
try {
    const data = await dummySchema.find();
    
    if (data) {
        res.status(200).json({message:"Data Send Successfully",data:data})
    }
} catch (error) {
    res.status(500).json({message:"Fetch fail"})
}
}


module.exports={PreviewClientFunction}