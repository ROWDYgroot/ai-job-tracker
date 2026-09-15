// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI);

//         console.log("MongoDB connected successfully");
//     } catch (error) {
//         console.log("MongoDB connection failed:", error);
//         process.exit(1);
//     }
// }

// export default connectDB;


import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;

        if (!mongoURI) {
            throw new Error("MONGO_URI is not defined");
        }

        await mongoose.connect(mongoURI);

        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection failed:", error);
        process.exit(1);
    }
};

export default connectDB;