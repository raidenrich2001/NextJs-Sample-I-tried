import mongoose  from "mongoose";
const connect = async () => {

    try {
        await mongoose.connect(process.env.MONGO).then(() => console.log("connected successfully"))
    }
    catch (error) {
        throw new Error(error)
    }

};

export default connect;