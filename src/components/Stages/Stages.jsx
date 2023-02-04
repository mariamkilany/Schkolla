import React from 'react'
import './stages.css'
import student from '../../imge/students.png'
import data from './data'
import Link from 'react-router-dom'

export default function stages() {
  return <>
      <div className="container mt-4">
      <div className="row">
        {data.map((data,index)=>    <div className="col-md-4" key={index}>
              <div className="stag-container p-3">
                  <div className={index%3===0?'stage stage-3 py-4 bg-white':(index%3===1)?'stage-2 py-4 bg-white stage':'stage-1 py-4 bg-white stage'}>
                    {/* <Link to={'/'}/> */}
                    <div className={index%3===0?'green':(index%3===1)?'blue':'pink'}>
                    <div className=" px-5 py-1">
                          <h4> المرحلة {data.level}</h4>
                      </div>
                    </div>                  
                      <div className="student-num mt-5 py-4">
                      <h3> عدد الطلاب:{data.student}</h3>
                      <img src={student} alt="" className='w-25' />
                      </div>
                      <div className="btm w-100">
                      <button className='btn delete-btn bttm pt-2'><h5>حذف</h5></button>
                        <button className='btn updat-btn bttm mx-4 pt-2'><h5>تعديل</h5></button>
                      </div>
                      
                  </div>
              </div>
          </div>)}
      </div>
    </div>
  </>
   
}
