import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { useState } from 'react'
import useConversation from '@/zustand/useConversation'
import useGetConversations from '@/hooks/useGetConversations'
import toast from 'react-hot-toast'

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;

    if(search.length < 3){
      return toast.error("Busca deve conter ao menos 3 caracteres")
    }

    const conversation = conversations.find((conver) => conver.fullName.toLowerCase().includes(search.toLowerCase()));

    if(conversation){
      setSelectedConversation(conversation);
      setSearch("")
    }else toast.error("Nenhum usuário encontrado!")
  }
  return (
    <form className='flex items-center ' onSubmit={handleSubmit}>
        <Input type="text" placeholder="Buscar" className=" hover:border-lime-400 duration-300 mr-1"
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button type="submit" className="bg-purple-950 hover:bg-purple-900 rounded-full duration-300">
            <SearchIcon className='w-6 h-6 outline-none ml'/>
        </Button>
    </form>
  )
}

export default SearchInput



// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { SearchIcon } from 'lucide-react'
// import React from 'react'

// const SearchInput = () => {
//   return (
//     <form className='flex items-center '>
//         <Input type="text" placeholder="Buscar" className=" hover:border-lime-400 duration-300 mr-1"/>
//         <Button type="submit" className="bg-purple-950 hover:bg-purple-900 rounded-full duration-300">
//             <SearchIcon className='w-6 h-6 outline-none ml'/>
//         </Button>
//     </form>
//   )
// }

// export default SearchInput