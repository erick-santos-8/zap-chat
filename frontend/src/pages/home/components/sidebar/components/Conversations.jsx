import { getRandomEmoji } from '@/utils/emojis';
import Conversation from './Conversation';
import useGetConversations from '@/hooks/useGetConversations';

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  
  console.log("Conversations", conversations);

  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {!loading && conversations.length === 0 ? (
        <span>Nenhuma conversa disponível</span>
      ) : (
        conversations.map((conversation) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
          />
        ))
      )}
      {loading && <span className='align-middle justify-center'>Carregando... 🤓</span>}
    </div>
  );
}

export default Conversations;



// import React from 'react'
// import Conversation from './Conversation'

// const Conversations = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//     </div>
//   )
// }

// export default Conversations