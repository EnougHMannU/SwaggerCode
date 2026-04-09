const database=require('../database/dbc');

const getcoursedata = async(req,res)=>{
    try{
        const db=await database.connectDB();
        const collection = db.collection('Course');
        const result=await collection.find({}).toArray();
        res.json({
            message:'course records get succesfully',
            data:result
        });
    }
    catch(err){
        console.error('Error fetching course data',err);
        res.status(500).json({message:'Internal servor error'});
    }
};

const postcoursedata = async(req,res)=>{
    try{
        const db= await database.connectDB();
        const collection=db.collection('Course');
        const result=await collection.insertOne(req.body);
        if(result.acknowledged==true){
        res.json({
            message:'course records added succesfully',
            data:result
        });
        }
        else{
              res.status(500).json({ message: 'Failed to add course record' });
        }
    }
    catch(err){
        console.error('Error in adding course data',err);
        res.status(500).json({message:'internal servor error'});
    }
}

const putcoursedata = async(req,res)=>{
   try{
    const db=await database.connectDB();
    const collection=db.collection('Course');
    let prmid = req.params.name;
    const result=await collection.updateOne({name:prmid},{$set:req.body});
    if(result.modifiedCount>0){
        res.json({
        message: 'course update successfully',
        data: result
        });
   }
   else{
    res.status(404).json({ message: 'Failed to update course record' });
   }
}
    catch(err){
        console.error('Error in updation course record',err);
        res.status(500).json({message:'internal servor error'});
        }
}

const deletecoursedata =async(req,res)=>{
    try{
   const db=await database.connectDB();
   const collection=db.collection('Course');
   const result=await collection.deleteOne({name:req.params.name});
   if(result.deletedCount>0){
     res.json({
        message: 'course record delete successfully',
        data: result
        });
   }
   else{
    res.status(404).json({ message: 'Failed to deletion course record' });
   }
}
catch(err){
     console.error('Error in deletion course record',err);
    res.status(500).json({message:'internal servor error'});
}
}

module.exports = {getcoursedata,postcoursedata,putcoursedata,deletecoursedata};