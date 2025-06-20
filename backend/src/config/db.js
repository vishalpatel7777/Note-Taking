import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URI);
        console.log("MongoDB connected !!");

    } catch (error) {
        console.error("Error in connecting : " , error);
        process.exit(1); // here 1 mean exit with failure
    }
}