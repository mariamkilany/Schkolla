import React from 'react'
import Satapi from '../../components/Stages/Satapi'
import AddClass from '../../components/popupComponents/AddClass'


export default function Showlevel() {
  return <>
          <div className="row justify-content-end">
            <AddClass/>
        </div>
        <div className="row flex-row-reverse g-5 mt-2">
        <Satapi link={`grade/getGradeClasses`} type={'class'}/>
        </div>
  </>
}
