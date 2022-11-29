const AddClientSchema = require('../Schema/AddClientSchema');
const getViewClientData = async(req, res) => {
    try{

        const AddClientSchama=await AddClientSchema.find()
        if (AddClientSchema) {
            res.status(200).json(AddClientSchama)
        }
    } 
    catch(error){
        console.log(error,"error")
    }
  

    
};

module.exports = { getViewClientData };
