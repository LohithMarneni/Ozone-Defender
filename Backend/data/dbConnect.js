import mongoose from "mongoose";

const dbConnect = async () => {
    try { 
        const conn = await mongoose.connect(process.env.MONGO_URI);
        // console.log(`MongoDB Connected: ${conn.connection.host}`);
        console.log(`MongoDB Connected: ${process.env.MONGO_URI}`);
    } catch (error) {    
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};
export default dbConnect;