import stuData  from "./StuData"
import"./style.css"
import Button from 'react-bootstrap/Button';
export default function StudentShow()
{
const iteam = ({Nid,image,name,gendre,Fname,Mname,Fphone,Mphone,email}) => 
  <tr>
    <td>{Nid}</td>
    <td><img  src={image}alt={"name"} /></td>
    <td>{name}</td>
    <td>{gendre}</td>
    <td>{Fname}</td>
    <td>{Mname}</td>
    <td>{Fphone}</td>
    <td>{Mphone}</td>
    <td>{email}</td>
  </tr>
   return(
    <>
    
    <input type="search1" placeholder="البحث بالاسم"/>
    <input type="search2" placeholder="البحث بالرقم القومي"/>
  
     <table>
                <thead className="lineStu">
                    <th>الرقم القومي</th>
                    <th>الصورة </th>
                    <th>الاسم </th>
                    <th>النوع </th>
                    <th>اسم الاب </th>
                    <th>اسم الام </th>
                    <th>تليفون الاب  </th>
                    <th>تليفون الام </th>
                    <th> الايميل </th>
                </thead>
                <tbody>
                {stuData.map(iteam)}
                 </tbody>
     </table>
     <Button variant="primary" className='levelbtn'>
        إضافة طالب جديد
        </Button>

    </>
 
   )
}