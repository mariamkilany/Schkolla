import React, { useEffect, useState,useContext } from 'react'
import Satapi from '../../components/Stages/Satapi'
import AddClass from '../../components/popupComponents/AddClass'
import AuthContext from '../../components/shared/AuthContext'

export default function Showlevel() {
  const stageId=localStorage.getItem('stageId')
  // const {stageId}=useContext(AuthContext);
  return <>
          <div className="row justify-content-end">
            <AddClass  gradeId={stageId}/>
        </div>
        <div className="row flex-row-reverse g-5 mt-2">
          <Satapi link={`grade/getGradeClasses/${stageId}`} type={'class'}/> 
        </div>
  </>
}
