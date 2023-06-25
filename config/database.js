//import mongoose for connecting with DB
import mongoose from "mongoose"
//connect with DB
const url = "mongodb+srv://ritu84279:Sharmaji123@contactdb.zjpirg1.mongodb.net/?retryWrites=true&w=majority"
const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(url);
        console.log("connection successfull",connection.host)
    } catch (err) {
        console.log("MongoDB connection error :",err);
    }
}
export default connectDB;