import React , {useContext} from "react"
import Heading from "../../common/Heading";
import {MemoDataContext} from "../MemoModel/MemoDataContext";
//import ViewPanel from "../ViewPanel";

    
 
const SellMemoForm = () => {
    const { productAmount,amountOfKGperpacket,productPrice,dholai,setStoreName ,setProductName,setProductType,
        setProductAmount,setProductPrice,setDholai, setProductDescription,
         setIssueDate,setMsg,
         setViewMemo,setSellMemo,setAmountOfKGperpacket,setTotal} = useContext(MemoDataContext);

    function saveData() {
        console.log("in");
        setTotal((productAmount*amountOfKGperpacket*productPrice)+parseInt(dholai));
        console.log(productAmount,amountOfKGperpacket,productPrice,dholai);
        setMsg("Memo Saved");
        setViewMemo(false);
        setSellMemo(true);
     }
    return(
        <div>
            <form action="" className="card p-4">
                <Heading title="Sell Memo" />
                <div className="form-group">
                    <div>
                        <label>Name:</label>
                        <input className="form-control mt-2" type="text" name= "storeName" 
                        onChange={(e) => setStoreName(e.target.value)}
                        
                        
                        />
                    </div>
                    <div>
                        <label>Date:</label>
                        <input
                            type="date"
                            name= "productDate"
                            className="form-control mt-2"
                            placeholder="Select Date"
                            
                         onChange={(e) => setIssueDate(e.target.value)}
                        />
                    </div>
                    </div>
                    
                    <form action="" className="card p-4">
                     
                      <div className="form-grid">
                    
                     
                      <div>
                        <label>Product Name:</label>
                        <input className="form-control mt-2" type="text" name= "productName" 
                        onChange={(e) => setProductName(e.target.value)}
                        
                        />
                      </div>

                      <div>
                        <label>Product Type:</label>
                        <input className="form-control mt-2" type="text" name= "productType" 
                        onChange={(e) => setProductType(e.target.value)}
                        
                        />
                      </div>

                      <div>
                        <label>Product Description:</label>
                        <input className="form-control mt-2" type="text" name= "productDescription" 
                        onChange={(e) => setProductDescription(e.target.value)}
                        
                        />
                      </div>

                      <div>
                        <label>{"Product Amount: (packets)"}</label>
                        <input className="form-control mt-2" type="text" name= "productAmount" 
                        onChange={(e) => setProductAmount(e.target.value)}
                        />
                      </div>
                      <div>
                        <label> {"Amount per Product: (kg)"}</label>
                        <input className="form-control mt-2" type="text" name= "amountOfKGperpacket" 
                        onChange={(e) => setAmountOfKGperpacket(e.target.value)}
                        
                        />
                      </div>
                      <div>
                        <label>Product Price{"(per kg)"}:</label>
                        <input  className="form-control mt-2" type="text" name= "productPrice" 
                        onChange={(e) => setProductPrice(e.target.value)}
                        
                        />
                      </div>

                      <div>
                        <label>Dholai</label>
                        <input className="form-control mt-2" type="text" name= "Dhola" 
                        onChange={(e) => setDholai(e.target.value)}
                        
                        />
                      </div>
                     
                    </div>
                    
                    </form>   
                <button
                    type="button"
                    className="btn btn-outline-primary mt-3"
                    onClick={saveData}
                    >
                    Save
                </button>
                
            </form>
        </div>
    )
};

export default SellMemoForm;