import { useSocketContext } from "@/context/SocketContext";
import useConversation from "@/zustand/useConversation"

const Conversation = ({conversation, emoji}) => {
    const {selectedConversation, setSelectedConversation} = useConversation();

    const isSelected = selectedConversation?._id === conversation._id;
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id)

    console.log(onlineUsers)
  return (
    <>
        <div className={`flex gap-2 items-center hover:bg-lime-400 rounded p-2 py-1 cursor-pointer
                ${isSelected? "bg-lime-400":""}    
            `} 
                onClick={()=> setSelectedConversation(conversation)}
            >
            
            {isOnline? (
                <div className="w-12 rounded-full bg-green-400">
                <div className='w-11 rounded-full'>
                    <img src={conversation.profilePic} alt="user avatar" className='rounded-full'/>
                </div>
            </div>
            ):(
                <div className="w-12 rounded-full bg-gray-400">
                <div className='w-11 rounded-full'>
                    <img src={conversation.profilePic} alt="user avatar" className='rounded-full'/>
                </div>
            </div>
            )}
            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p className='font-bold'>{conversation.fullName}</p>
                    <span className='text-xl'>{emoji}</span>
                </div>
            </div>
        </div>   
        <div className='divider my-0 py-0 h-1'/>
    </>
  )
}

export default Conversation


// import React from 'react'

// const Conversation = () => {
//   return (
//     <>
//         <div className='flex gap-2 items-center hover:bg-lime-400 rounded p-2 py-1 cursor-pointer'>
//             <div className='avatar online'>
//                 <div className='w-12 rounded-full'>
//                     <img src="https://github.com/shadcn.png" alt="user avatar"/>
//                 </div>
//             </div>
//             <div className='flex flex-col flex-1'>
//                 <div className='flex gap-3 justify-between'>
//                     <p className='font-bold'>John Doe</p>
//                     <span className='text-xl'>😂</span>
//                 </div>
//             </div>
//         </div>   
//         <div className='divider my-0 py-0 h-1'/>
//     </>
//   )
// }

// export default Conversation