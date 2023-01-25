const mongoose=require('mongoose')

const cinematographerSchema=mongoose.Schema({
    userID:{
        type:String
    },
    eventsId:{
        type:String
    },
    Client:{
        BrideName:{
            type:String
        },
        GroomName:{
            type:String
        },

    },
    EditorId:{
        type:String
    },
    Editor:{
        type:String
    },
    WeddingDate:{
        type:String
    },
    companyDate:{
        type:String
    },
    ClientDate:{
        type:String
    },
    Status:{
        type:String
    },
    
    commonId:{
        type:String
    },
    ClientRevision:{
        type:String
    },
    suggestion:{
        type:String
    }
})

const DeliverableModel=mongoose.model("DeliverableCinematographer",cinematographerSchema)
module.exports=DeliverableModel