import React from 'react'
import Message from './Message';
import useGetMessages from '@/hooks/useGetMessages';
import SkeletonMessage from './SkeletonMessage';

const Messages = () => {
  const { messages, loading } = useGetMessages();
  console.log("messages", messages);
  if(messages.length === 0){
    return(
      <div className='px-2 flex-1 overflow-auto'>
        <p className='text-center opacity-90'>Vocês não conversaram ainda! Envie uma menssagem 😉 </p>
      </div>
    )
  }
  return (
    <div className='px-2 flex-1 overflow-auto'>
      {!loading? (
        messages.map((message) => (
          <Message key={message._id} message={message} />
        ))
      ) : (
        [...Array(4)].map((_, idx) => <SkeletonMessage key={idx} />)
      )}
    </div>
  );
}

export default Messages;


{/* <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length > 0 && messages.map(
        (message) => {
          <Message key={message._id} message={message}/>
        }
      )}
      
      {loading && [...Array(4)].map((_,idx) => <SkeletonMessage key={idx}/>)}

      {!loading && messages.length === 0 && (
        <p className='text-center opacity-90'>Vocês não conversaram ainda! Envie uma menssagem 😉 </p>
      )}
    </div> */}



// import React from 'react'
// import Message from './Message'

// const Messages = () => {
//   return (
//     <div className='px-4 flex-1 overflow-auto'>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//     </div>
//   )
// }

// export default Messages