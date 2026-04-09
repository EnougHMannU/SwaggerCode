const database = require('../database/dbc');

const getstudentdata = async (req,res)=>{
    try{
        const db= await database.connectDB();
        const collection=db.collection('Student');
        const result=await collection.find({}).toArray();
        res.json({
            message:'student records get succesfully',
            data:result
        });
    }
    catch(err){
        console.error('Error fetching student data',err);
        res.status(500).json({message:'internal servor error'});
    }
};
//insert api
const poststudentdata = async(req,res)=>{
    try{
        const db= await database.connectDB();
        const collection=db.collection('Student');
        const result=await collection.insertOne(req.body);
        if(result.acknowledged==true){
        res.json({
            message:'student records added succesfully',
            data:result
        });
        }
        else{
              res.status(500).json({ message: 'Failed to add student record' });
        }
    }
    catch(err){
        console.error('Error in adding student data',err);
        res.status(500).json({message:'internal servor error'});
    }
}
//update api
const putstudentdata = async(req,res)=>{
   try{
    const db=await database.connectDB();
    const collection=db.collection('Student');
    let prmid = req.params.name;
    const result=await collection.updateOne({name:prmid},{$set:req.body});
    if(result.modifiedCount>0){
        res.json({
        message: 'student update successfully',
        data: result
        });
   }
   else{
    res.status(404).json({ message: 'Failed to update student record' });
   }
}
    catch(err){
        console.error('Error in updation student record',err);
        res.status(500).json({message:'internal servor error'});
        }
}
//delete api
const deletestudentdata =async(req,res)=>{
    try{
   const db=await database.connectDB();
   const collection=db.collection('Student');
   const result=await collection.deleteOne({name:req.params.name});
   if(result.deletedCount>0){
     res.json({
        message: 'student record delete successfully',
        data: result
        });
   }
   else{
    res.status(404).json({ message: 'Failed to deletion student record' });
   }
}
catch(err){
     console.error('Error in deletion student record',err);
    res.status(500).json({message:'internal servor error'});
}
}

module.exports = {getstudentdata,poststudentdata,putstudentdata,deletestudentdata};
