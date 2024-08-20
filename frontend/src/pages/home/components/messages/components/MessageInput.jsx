import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import useSendMessage from '@/hooks/useSendMessage'
import { Send } from 'lucide-react'
import { useState } from 'react'

const MessageInput = () => {
  
  const [message, setMessage] = useState("");
  const {loading, sendMessage} = useSendMessage();
  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(!message) return;

    await sendMessage(message);
    setMessage("");
  }

  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
        <div className="w-full flex flex-row">
            <Input 
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Envie uma menssagem" className="mr-1 border-purple-950 bg-slate-100"/>
            <Button className="bg-purple-950 hover:bg-purple-900" disabled={loading} type="submit">
                <Send/>
            </Button>
        </div>
    </form>
  )
}

export default MessageInput



// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Send } from 'lucide-react'

// const MessageInput = () => {
//   return (
//     <form className='px-4 my-3'>
//         <div className="w-full flex flex-row">
//             <Input type="text" placeholder="Envie uma menssagem" className="mr-1 border-purple-950 bg-slate-100"/>
//             <Button className="bg-purple-950 hover:bg-purple-900">
//                 <Send/>
//             </Button>
//         </div>
//     </form>
//   )
// }

// export default MessageInput