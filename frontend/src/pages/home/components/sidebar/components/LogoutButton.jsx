import { Button } from '@/components/ui/button'
import { LogOutIcon } from 'lucide-react'

const LogoutButton = () => {
  return (
    <div className='mt-auto'>
      <LogOutIcon className='w-6 h-6 cursor-pointer text-purple-950 hover:text-purple-900'/>
    </div>
  )
}

export default LogoutButton;