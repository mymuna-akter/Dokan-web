import React , { useContext} from "react";
import { MemoDataContext } from "./MemoModel/MemoDataContext";
import SaveMemo from "./view_panel/SaveMemo"
import GetMemo from "./view_panel/GetMemo";
const ViewPanel = () => {
   const {sellMemo, viewMemo} = useContext(MemoDataContext);
    return (
        <div>
            {sellMemo? <SaveMemo /> : viewMemo? <GetMemo /> : 
            <div>
                welcome to xyz
            </div>
            }
            
            
            
        </div>
    )
};

export default ViewPanel;