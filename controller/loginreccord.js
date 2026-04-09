const database = require('../database/dbc');
const jwt = require("jsonwebtoken");
const SECRET_KEY = "mysecretkey"; 

const getuserdata = async (req, res) => {
  try {
    const db = await database.usersrecordDB();
    const collection = db.collection('userspasswords');
    const result = await collection.find({}).toArray();

    res.json({
      message: 'User records retrieved successfully',
      data: result
    });
  }
  catch(err){
    console.error('Error fetching user data:', err);
    res.status(500).json({ message: 'Internal Server Error' });  
  } 
}

const searchrecord = async(req,res)=>{
    try{
        const db=await database.usersrecordDB();
        const collection=db.collection('userspasswords');
          const { username, password } = req.body;

        const user = await collection.findOne({ username, password });
        if (user) {
            const token = jwt.sign(
            {username: user.username },
            SECRET_KEY,
            { expiresIn: "1h" }
        );
            res.json({
                success:true,
                message: 'Login succesfully',
                tokenval:token
            });
        } else {
            res.json({
                success: false,
                message: 'Invalid username or password'
            });
        }
    }
    catch(err){
    console.error('Login Error',err);
        res.status(500).json({message:'internal servor error'});
    }
}

const verifyToken = (req, res, next) => {
  const token =  req.headers["authorization"];

  if (!token) {
    return res.status(403).json({
      message: "Token required"
    });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: "Invalid token"
      });
    }

    req.user = decoded;
    console.log("Decoded token:", decoded);
    next();
  });
};


module.exports = {searchrecord,verifyToken,getuserdata};