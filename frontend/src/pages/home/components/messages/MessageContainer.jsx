import { useEffect } from 'react'
import Messages from './components/Messages'
import MessageInput from './components/MessageInput'
import { MessageCircleHeart } from 'lucide-react'
import useConversation from '@/zustand/useConversation'
import { useAuthContext } from '@/context/AuthContext'

const MessageContainer = () => {
  const{selectedConversation, setSelectedConversation} = useConversation();

  useEffect(()=>{
    //limpar a conversa selecionada após entrar
    return () => setSelectedConversation(null);
  },[setSelectedConversation])
  return (
    <div className='md:min-w-[450px] flex flex-col'>
        {!selectedConversation? (
          <NoChatSelected/>
        ):(
          <>
            <div className='bg-lime-400 px-4 py-2 mb-2'>
                <span className='label-text'>Para: </span>
                <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
            </div>
            <Messages/>
            <MessageInput/>
        </>
        )}
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
  const {authUser} = useAuthContext()
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-black font-semibold flex flex-col items-center gap-2'>
        <p>Bem-vindo {authUser.fullName}! 👋</p>
        <p>Selecione um chat para conversar 😀</p>
        <MessageCircleHeart className='text-3xl md:text-6xl text-center'/>
      </div>

    </div>
  )
}



// import React from 'react'
// import Messages from './components/Messages'
// import MessageInput from './components/MessageInput'

// const MessageContainer = () => {
//   return (
//     <div className='md:min-w-[450px] flex flex-col'>
//         <>
//             <div className='bg-lime-400 px-4 py-2 mb-2'>
//                 <span className='label-text'>Para:</span>
//                 <span className='text-gray-900 font-bold'>John Doe</span>
//             </div>
//             <Messages/>
//             <MessageInput/>
//         </>
//     </div>
//   )
// }

// export default MessageContainer