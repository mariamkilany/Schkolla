import './message.css'
import admin from '../../imge/admin.jpg'

function Message({own}) {
  return (
    <div className={own?"message own":"message"}>
      <div className="messageTop">
      <img className="messageImg" src={admin}/>
      <p className="messageTxt">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin diam ac eros sollicitudin ultricies.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin diam ac eros sollicitudin ultricies. 
      </p>
      </div>
      <div className="messageBottom">منذ ساعة</div>
    </div>
  )
}

export default Message
