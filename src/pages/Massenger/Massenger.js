import './massenger.css';
import Conversation from '../../components/Conversations/Conversation'
import Message from '../../components/Message/Message'
import {BiSend} from 'react-icons/bi'

export default function Massenger() {
    return(
    <div className="massenger">
        <div className="chatMenu">
            <div className="chatMenuWrapper">
                <input className="chatMenuInput" placeholder="ابحث بالاسم ..."/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
            </div>
        </div>
        <div className="chatBox">
            <div className="chatBoxWrapper">
                <div className="chatBoxTop">
                    <Message/>
                    <Message own={true} />
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message own={true} />
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message own={true} />
                    <Message/>
                    <Message/><Message/>
                    <Message own={true} />
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message own={true} />
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message own={true} />
                    <Message/>
                    <Message/><Message/>
                    <Message own={true} />
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message own={true} />
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message own={true} />
                    <Message/>
                    <Message/>
                </div>
            <div className="chatBoxBottom">
                <textarea className="chatMessageInput" placeholder="...أكتب رداً"></textarea>
                <button className="chatSubmitBtn btn"><BiSend className="sendIcon" /> </button>
            </div>
            </div>
        </div>
    </div>
    );
}