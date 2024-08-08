import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required:true
    },
    userName:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        minlenght:6
    },
    gender:{
        type:String,
        required:true,
        enum:["male", "female", "trans-male", "trans-female", "nonbinary", "other"]
    },
    profilePic:{
        type:String,
        default:"",
    }
});

const User = mongoose.model("User", userSchema);

export default User;