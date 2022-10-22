import React ,{useContext} from "react"; 
import { MemoDataContext } from "../MemoModel/MemoDataContext"

const SaveMemo = () =>{
const {msg ,total}= useContext(MemoDataContext);

 return(
 <div>
  {msg}

  total : {total}
  
 </div>
    );

};
export default SaveMemo;