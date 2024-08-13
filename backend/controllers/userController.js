import User from "../models/userModel.js"

export const getUsersForSideBar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        //procura todos os usuários diferentes do logado
        const filteredUsers = await User.find({_id: { $ne: loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Erro em getUserForSideBar: ", error.message);
        res.status(500).json({error: "Erro interno"});
    }
}