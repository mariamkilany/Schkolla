import { useState } from "react";
import "./tabs.css"
import StudentShow from"../ShowData/Student";
import Subj from "../ShowData/Subjects";
function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
       
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          المواد الدراسية
        </button>
       
        
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          الجداول الدراسية
        </button>
       
       
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          عرض التلاميذ
        </button>
      
        </div>
      <div className="content-tabs">
        <div
         style={{margin:'20px auto',width:'70%'}}
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <Subj/>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>الجداول</h2>
         
          
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <StudentShow/>
          
        </div>
      </div>
    </div>
  );
}

export default Tabs;