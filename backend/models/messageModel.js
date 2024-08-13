import mongoose from "mongoose";


const messageSchema = new mongoose.Schema({
    serverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message:{
        type: String,
        required: true
    }
    //timestamps: mongoose cria campos com horarios dos envios
}, {timestamps:true});

const Message = mongoose.model("Message", messageSchema);

export default Message;