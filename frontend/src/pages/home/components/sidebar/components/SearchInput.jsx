import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'

const SearchInput = () => {
  return (
    <form className='flex items-center '>
        <Input type="text" placeholder="Buscar" className=" hover:border-lime-400 duration-300 mr-1"/>
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