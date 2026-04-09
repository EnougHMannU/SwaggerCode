const database = require('../database/dbc');

const getreactdata = async (req,res)=>{
    try{
        const db= await database.connectDB();
        const collection=db.collection('reactapi');
        const result=await collection.find({}).toArray();
        res.json({
            message:'react data records get succesfully',
            data:result
        });
    }
    catch(err){
        console.error('Error fetching react data',err);
        res.status(500).json({message:'internal servor error'});
    }
};
//insert api
const postreactdata = async(req,res)=>{
    try{
        const db= await database.connectDB();
        const collection=db.collection('reactapi');
        const result=await collection.insertOne(req.body);
        if(result.acknowledged==true){
        res.json({
            message:'react records added succesfully',
            data:result
        });
        }
        else{
              res.status(500).json({ message: 'Failed to add react record' });
        }
    }
    catch(err){
        console.error('Error in adding react data',err);
        res.status(500).json({message:'internal servor error'});
    }
}
//update api
const putreactdata = async(req,res)=>{
   try{
    const db=await database.connectDB();
    const collection=db.collection('reactapi');
    let prmid = parseInt(req.params.id);
    const result=await collection.updateOne({id:prmid},{$set:req.body});
    if(result.modifiedCount>0){
        res.json({
        message: 'react update successfully',
        data: result
        });
   }
   else{
    res.status(404).json({ message: 'Failed to update react record' });
   }
}
    catch(err){
        console.error('Error in updation react record',err);
        res.status(500).json({message:'internal servor error'});
        }
}
//delete api
const deletereactdata =async(req,res)=>{
    try{
   const db=await database.connectDB();
   const collection=db.collection('reactapi');
   let prmid = parseInt(req.params.id);
   const result=await collection.deleteOne({id:prmid});
   if(result.deletedCount>0){
     res.json({
        message: 'react record delete successfully',
        data: result
        });
   }
   else{
    res.status(404).json({ message: 'Failed to deletion react record' });
   }
}
catch(err){
     console.error('Error in deletion react record',err);
    res.status(500).json({message:'internal servor error'});
}
}

module.exports = {getreactdata,postreactdata,putreactdata,deletereactdata};
