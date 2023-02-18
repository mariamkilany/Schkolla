import Tabs from "../../components/tabs/Tabs";
import AddLevel from '../../components/popupComponents/AddLevel'
import Satapi from '../../components/Stages/Satapi'
export default function Levels() {
    return <>
        <div className="row justify-content-end">
            <AddLevel/>
        </div>
        <div className="row">
            <Satapi/>
        </div>

    </>
}