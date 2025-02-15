import React from 'react'
import './Chat.css'
import LeftSidebar from '../../compnents/LeftSidebar/LeftSidebar'
import ChatBox from '../../compnents/ChatBox/ChatBox'
import RightSidebar from '../../compnents/RightSidebar/RightSidebar'
const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat-container">
        <LeftSidebar/>
        <ChatBox/>
        <RightSidebar/>
      </div>
    </div>
  )
}

export default Chat
