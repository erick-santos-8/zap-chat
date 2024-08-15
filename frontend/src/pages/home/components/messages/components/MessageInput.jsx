import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send } from 'lucide-react'

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
        <div className="w-full flex flex-row">
            <Input type="text" placeholder="Envie uma menssagem" className="mr-1 border-purple-950 bg-slate-100"/>
            <Button className="bg-purple-950 hover:bg-purple-900">
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