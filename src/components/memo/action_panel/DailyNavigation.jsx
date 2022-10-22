import React , {useContext} from "react";
import Heading from "../../common/Heading";
import { MemoDataContext } from "../MemoModel/MemoDataContext";
const DailyNavigation = () => {
  const {setSellMemo,setViewMemo } = useContext(MemoDataContext);
  function setProduct(event){
    
  }
  function getDayData(){
    setViewMemo(true);
    setSellMemo(false);
  }
    return (
        <div>
          <form action="" className="card p-4">
            <Heading title="Get Memo" />
            <div className="form-group">
             
             <div>
               <label>Select Date</label>
              <input
                type="date"
                name="date"
                className="form-control mt-2"
                placeholder="Select Date"
      
               onChange={(e) => setProduct(e.target.value)}
              />
              </div> 
              <div>
               <label>Name:</label>
               <input
                className="form-control mt-2"
                 type="text"
                  name= "name" 
                onChange={(e) => setProduct(e.target.value)}
              />
              </div>
            </div>
            <button
              type="button"
              className="btn btn-outline-primary mt-3"
              onClick={getDayData}
            >
              Show Memo
            </button>
          </form>
      </div>
    )};

export default DailyNavigation;