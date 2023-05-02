import React from 'react'
import './chatHeader.css'
import personph from '../../imge/admin.jpg'

export default function ChatHeader() {
  return <>
    <div className=" chatHeader p-3 mb-2">
            <img src={personph} alt=""  className='headerImg'/>
            <span className='headerText ms-5'>سليم محمد</span>

    </div>
  </>
}
