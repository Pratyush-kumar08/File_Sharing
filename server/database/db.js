import mongoose  from "mongoose";

const DBConnection=async()=>{
    const MONGODB_URI=`mongodb://user:codeforinterview@ac-4hf9a1c-shard-00-00.ckxptlp.mongodb.net:27017,ac-4hf9a1c-shard-00-01.ckxptlp.mongodb.net:27017,ac-4hf9a1c-shard-00-02.ckxptlp.mongodb.net:27017/?ssl=true&replicaSet=atlas-16xi1z-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGODB_URI,{useNewUrlParser:true});
        console.log('Database connected cuccessfully');
    } catch (error) {
        console.error('Error while connecting with the database',error.message);
    }
}
export default DBConnection;