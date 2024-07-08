import mongoose from "mongoose"


async function connectDB() {
    mongoose.connect("mongodb://127.0.0.1:27017/library")
    return mongoose.connection
}

export default connectDB