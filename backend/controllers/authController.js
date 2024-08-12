import User from "../models/userModel.js"


export const signup = async (req, res) => {
    try{
        const {fullName, userName, password, confirmPassword, gender} = req.body;
    
    if(password !== confirmPassword){
        return res.status(400).json({error:"Senhas diferentes!"})
    }

    const user = await User.findOne({userName});
    if(user){
        return res.status(400).json({error: "Usuário já existe."})
    }

    //HASH PASSWORD HERE

    // https://avatar-placeholder.iran.liara.run/

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`
    
    const newUser = new User({
        fullName,
        userName,
        password,
        gender,
        profilePic: gender === "male"? boyProfilePic : girlProfilePic
    })

    await newUser.save();

    res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName:newUser.userName,
        profilePic:newUser.profilePic
    })

    } catch (error) {
        console.log("Erro ao cadastrar", error.message);
        res.status(500).json({error:"Erro interno"});
    }
}

export const login = async (req, res) => {
    console.log("loginUser")
}

export const logout = async (req, res) => {
    console.log("logoutUser")
}

