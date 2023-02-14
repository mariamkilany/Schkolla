
import EmployData from "./EmployData.js";
import Button from 'react-bootstrap/Button';
import"./style.css"
export default function EmployShow() {
    const employee = ({ Nid, image, name, gendre, job, Mphone, email }) => <tr>
        <td>{Nid}</td>
        <td><img src={image} alt={"name"} /></td>
        <td>{name}</td>
        <td>{gendre}</td>
        <td>{job}</td>
        <td>{Mphone}</td>
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
                    <th> الوظيفة </th>
                    <th> رقم الهاتف </th>
                    <th> الايميل </th>
                </thead>
                <tbody>
                    {EmployData.map(employee)}
                </tbody>
            </table>
            <Button variant="primary" className='levelbtn'>
        إضافة موظف جديد
        </Button>

        </>

    );
}
