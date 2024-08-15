
const messageBubbleReceive = (text, time) =>{
  return (
    <div className="flex justify-start mb-4">
    <div className="w-full max-w-xs p-4 bg-lime-400 text-black rounded-lg shadow-lg break-words">
        {text}
        <p className='flex justify-end opacity-40'>{time}</p>
    </div>
</div>

  )
}

const messageBubbleSend = (text, time) =>{
  return (
    <div className="flex justify-end mb-4">
    <div className="w-full max-w-xs p-4 bg-purple-950 text-white rounded-lg shadow-lg break-words">
        {text}
        <p className='flex justify-end opacity-40'>{time}</p>
    </div>
</div>

  )
}



const Message = () => {
  return (
    messageBubbleReceive("aaaaaaaa", "12:50")

  )
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