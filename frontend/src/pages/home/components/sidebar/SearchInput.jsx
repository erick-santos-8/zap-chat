import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'

const SearchInput = () => {
  return (
    <form className='flex items-center '>
        <Input type="text" placeholder="Buscar" className="rounded-r-none hover:border-lime-400 duration-300"/>
        <Button type="submit" className="bg-lime-400 hover:bg-purple-950 rounded-l-none duration-300">
            <SearchIcon className='w-6 h-6 outline-none'/>
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
//         <Input type="text" placeholder="Buscar" className="rounded-r-none hover:border-lime-400 duration-300"/>
//         <Button type="submit" className="bg-lime-400 hover:bg-purple-950 rounded-l-none duration-300">
//             <SearchIcon className='w-6 h-6 outline-none'/>
//         </Button>
//     </form>
//   )
// }

// export default SearchInput