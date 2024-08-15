import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import MessageContainer from './components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-slate-100 bg-clip-padding shadow-2xl '>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home