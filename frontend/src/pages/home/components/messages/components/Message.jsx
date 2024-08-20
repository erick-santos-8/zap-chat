import { useAuthContext } from "@/context/AuthContext"
import { extractTime } from "@/utils/extractTime"


const messageBubbleReceive = (text, timeSend) =>{
  return (
    <div className="flex justify-start mb-3 mr-2">
    <div className="w-full max-w-xs p-4 bg-lime-400 text-black rounded-lg shadow-lg break-words">
        {text}
        <p className='flex justify-end opacity-40'>{timeSend}</p>
    </div>
</div>

  )
}

const messageBubbleSend = (text, timeSend) =>{
  return (
    <div className="flex justify-end mb-3 ml-2">
    <div className="w-full max-w-xs p-4 bg-purple-950 text-white rounded-lg shadow-lg break-words">
        {text}
        <p className='flex justify-end opacity-40'>{timeSend}</p>
    </div>
</div>

  )
}



const Message = ({message}) => {
  console.log("Menssagens para enviar", message.message)
  const {authUser} = useAuthContext();

  const fromMe = message.senderId === authUser._id;
  const timeSend = extractTime(message.createdAt);
  if(fromMe){
    return messageBubbleSend(message.message, timeSend)
  }
  
  return messageBubbleReceive(message.message, timeSend)
}

export default Message




// const messageBubbleReceive = (text, time) =>{
//   return (
//     <div className="flex justify-start mb-4">
//     <div className="w-full max-w-xs p-4 bg-lime-400 text-black rounded-lg shadow-lg break-words">
//         {text}
//         <p className='flex justify-end opacity-40'>{time}</p>
//     </div>
// </div>

//   )
// }

// const messageBubbleSend = (text, time) =>{
//   return (
//     <div className="flex justify-end mb-4">
//     <div className="w-full max-w-xs p-4 bg-purple-950 text-white rounded-lg shadow-lg break-words">
//         {text}
//         <p className='flex justify-end opacity-40'>{time}</p>
//     </div>
// </div>

//   )
// }



// const Message = () => {
//   return (
//     messageBubbleReceive("aaaaaaaa", "12:50")

//   )
// }

// export default Message