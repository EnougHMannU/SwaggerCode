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

const postteacherdata = (req,res)=>{
    res.json({
        message:"post succesfully",
        data:req.body
    })
}

const putteacherdata = (req,res)=>{
    res.json({
        message:"put succesfully",
        data: req.body ,
        rollno: req.params.id
    })
}

const deleteteacherdata =(req,res)=>{
    res.json({
        message:"delete succesfully",
        data:req.body,
        id:req.params.id
    })
}

module.exports = {getteacherdata,postteacherdata,putteacherdata,deleteteacherdata};