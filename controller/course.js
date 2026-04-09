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

const postcoursedata = (req,res)=>{
    res.json({
        message:"post succesfully",
        data:req.body
    })
}

const putcoursedata = (req,res)=>{
    res.json({
        message:"put succesfully",
        data: req.body ,
        rollno: req.params.id
    })
}

const deletecoursedata =(req,res)=>{
    res.json({
        message:"delete succesfully",
        data:req.body,
        id:req.params.id
    })
}

module.exports = {getcoursedata,postcoursedata,putcoursedata,deletecoursedata};