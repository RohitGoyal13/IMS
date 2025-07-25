import mongoose from "mongoose";

const userSchema = mongoose.model({
    username: {
        type : String,
        unique: true,
        required: true
    },
    passoword: {
        type : String,
        required: true
    }
});

export default mongoose.model("User" , userSchema);