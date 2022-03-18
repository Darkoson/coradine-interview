import mongoose from "mongoose";
import config from 'config'


export async function connectToDatabase() {
    try {
        await mongoose.connect(config.get("dbUri"));
        console.log("🚀 successful connection to database");
        
    } catch (error) {
        console.log(error);
        process.exit(1)
        
    }
}