import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './components/Conversations'

const Sidebar = () => {
  return (
    <div>
      <SearchInput/>
      <div className='divider px-3'></div>
      <Conversations/>
      
    </div>
  )
}

export default Sidebar