import subjData  from "./subjData"
import"./style.css"
export default function Subj()
{
const iteam = ({title,teacher}) => 
  <tr>
    <td>{teacher}</td>
    <td>{title}</td>
  </tr>
   return(
    <>
     <table style={{width:'100%'}}>
                <thead className="line">
                    <th>اسم المعلم </th>
                    <th> المادة </th>
                </thead>
                <tbody>
                {subjData.map(iteam)}
                 </tbody>
     </table>
    </>
 
   )
}