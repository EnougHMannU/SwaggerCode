const {MongoClient} = require('mongodb');
// const url ='mongodb://127.0.0.1:27017';
const url='mongodb+srv://MannU:MannU@cluster0.yfmuk.mongodb.net/'
const dbname = 'collegerecord';
const userdbname= 'loginrecords';
const client = new MongoClient(url);

async function connectDB(){
    try{
        await client.connect();
        console.log('connected to mongodb');
        const db = client.db(dbname);
        return db;
    }
    catch(err){
        console.log("connection error", err);
    }
}

async function usersrecordDB(){
    try{
        await client.connect();
        console.log('connected to mongodb');
        const db = client.db(userdbname);
        return db;
    }
    catch(err){
        console.log("connection error", err);
    }
}

module.exports = {connectDB,usersrecordDB};