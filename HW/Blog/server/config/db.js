import mongoose from "mongoose";

const connectDB = async () => {

    try {
        mongoose.set('strictQuery',false);
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`DB connected : ${conn.connection.host}`)
    } catch (error) {
       console.error('DB connection failed:', error.message);
       process.exit(1); // ⛔ stop app if DB fails 
    }
}

export default connectDB;