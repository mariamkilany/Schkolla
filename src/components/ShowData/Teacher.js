
import TeacherData from "./TeacherData";
import Button from 'react-bootstrap/Button';
import"./style.css"
export default function TeacherShow() {
    const iteam = ({ Nid, image, name, gendre, field, phone, email }) => <tr>
        <td>{Nid}</td>
        <td><img src={image}alt={"name"} /></td>
        <td>{name}</td>
        <td>{gendre}</td>
        <td>{field}</td>
        <td>{phone}</td>
        <td>{email}</td>
    </tr>;
    return (
        <>
        <input type="search1" placeholder="البحث بالاسم"/>
        <input type="search2" placeholder="البحث بالرقم القومي"/>
            <table>
                <thead className="line">
                    <th>الرقم القومي</th>
                    <th>الصورة </th>
                    <th>الاسم </th>
                    <th>النوع </th>
                    <th> التخصص </th>
                    <th> رقم الهاتف </th>
                    <th> الايميل </th>
                </thead>
                <tbody>
                    {TeacherData.map(iteam)}
                </tbody>
            </table>
            <Button variant="primary" className='levelbtn'>
        إضافة معلم جديد
        </Button>
        </>

    );
}
