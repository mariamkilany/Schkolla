import './conversation.css'
import admin from '../../imge/admin.jpg'
import React from 'react'

function Conversation() {
  return (
    <div className="conversation">
    <img className="conversationImg" src={admin}/>
    <span className="conversationName"> سليم محمد </span>
    </div>
  )
}

export default Conversation
