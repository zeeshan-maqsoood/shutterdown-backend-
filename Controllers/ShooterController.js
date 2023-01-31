const addClientSchema=require('../Schema/AddClientSchema')
const taskSchema=require('../Schema/TaskSchema')

const ShooterCalenderView=async(req,res)=>{
    // console.log(req.params,"body")
    
    // console.log(data,"data")

    // data.map((item)=>{
        
    // })
    // console.log(data.map((item)=>{
    //     console.log(item,"item")
    // }),"data")
// const filter=data.filter((filterData)=>{
//     filterData.events.filter((PhotoGrapher)=>{
//         PhotoGrapher.photoGrapherName.filter(async(data)=>{
//           const finalData=await addClientSchema.find({'events.photoGrapherName.id':{$eq:req.body.id}})
//           console.log(finalData,"finalData")
//         })
//     })
// })
try {
    const data = await addClientSchema.find({
      'events.photoGrapherName.id': { $eq: req.params.id },
    });
    console.log(data,"data")
    res.status(200).json(data)
//   res.status(200).json({message:"Shooter Data"})
} catch (error) {
    console.log(error,"error")
}
}

const ShooterTaskView=async(req,res)=>{
    console.log(req.params,"params")
    try {

        const data=await taskSchema.find({'assignTo.id':{$eq:req.params.id}})
      res.status(200).json(data)
        
    } catch (error) {
        
    }
}
const EditorTaskView=async(req,res)=>{
try {
    const data=await taskSchema.find({'assignTo.id':{$eq:req.params.id}})
   res.status(200).json(data)
} catch (error) {
    console.log(error,"error")
}
}


module.exports={ShooterCalenderView,ShooterTaskView,EditorTaskView}