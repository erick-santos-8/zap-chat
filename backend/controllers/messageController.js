import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
    try {
        const {message} = req.body;
        //obs: é a mesma coisa de id = req.params.id
        const {id:receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]},
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessage = new Message({
            // mesma coisa de senderId: senderId,
            senderId,
            receiverId,
            message,
        });
        
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        //Salva em sequencia
//        await conversation.save();
//        await newMessage.save();

        //Salva ao mesmo tempo
        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Erro em SendMessageController: ", error.message);
        res.status(500).json({error: "Erro interno"});
    }
}