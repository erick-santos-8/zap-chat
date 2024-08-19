import { LogOutIcon } from 'lucide-react'
import useLogout from '@/hooks/useLogout'

const LogoutButton = () => {

  const {loading, logout } =  useLogout();
  return (
    <div className='mt-auto'>
      {!loading? (
        <LogOutIcon className='w-6 h-6 cursor-pointer text-purple-950 hover:text-purple-900' onClick={logout}/>
  ):(
        <LogOutIcon className='w-6 h-6 cursor-wait text-gray-500'/>
      )}
    </div>
  )
}

export default LogoutButton;