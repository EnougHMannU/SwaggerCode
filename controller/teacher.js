const database = require('../database/dbc');

const getteacherdata = async(req,res)=>{
    try{
        const db=await database.connectDB();
        const collection = db.collection('Teacher');
        const result=await collection.find({}).toArray();
        res.json({
            message:'teacher records get succesfully',
            data:result
        });
    }
    catch(err){
        console.error('Error fetching teacher data',err);
        res.status(500).json({message:'Internal servor error'});
    }
};

const postteacherdata = async(req,res)=>{
    try{
        const db= await database.connectDB();
        const collection=db.collection('Teacher');
        const result=await collection.insertOne(req.body);
        if(result.acknowledged==true){
        res.json({
            message:'Teacher records added succesfully',
            data:result
        });
        }
        else{
              res.status(500).json({ message: 'Failed to add teacher record' });
        }
    }
    catch(err){
        console.error('Error in adding teacher data',err);
        res.status(500).json({message:'internal servor error'});
    }
}
const putteacherdata = async(req,res)=>{
   try{
    const db=await database.connectDB();
    const collection=db.collection('Teacher');
    let prmid = req.params.name;
    const result=await collection.updateOne({name:prmid},{$set:req.body});
    if(result.modifiedCount>0){
        res.json({
        message: 'teacher update successfully',
        data: result
        });
   }
   else{
    res.status(404).json({ message: 'Failed to update teacher record' });
   }
}
    catch(err){
        console.error('Error in updation teacher record',err);
        res.status(500).json({message:'internal servor error'});
        }
}

const deleteteacherdata =async(req,res)=>{
    try{
   const db=await database.connectDB();
   const collection=db.collection('Teacher');
   const result=await collection.deleteOne({name:req.params.name});
   if(result.deletedCount>0){
     res.json({
        message: 'teacher record delete successfully',
        data: result
        });
   }
   else{
    res.status(404).json({ message: 'Failed to deletion teacher record' });
   }
}
catch(err){
     console.error('Error in deletion teacher record',err);
    res.status(500).json({message:'internal servor error'});
}
}

module.exports = {getteacherdata,postteacherdata,putteacherdata,deleteteacherdata};