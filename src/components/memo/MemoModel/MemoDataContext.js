import React,{ useState ,createContext} from "react";

export const MemoDataContext= createContext();
export const MemoDataProvider =(props)=> {
const [productName ,setProductName] = useState("");
const [productType ,setProductType] = useState("");
const [productPrice ,setProductPrice] = useState(0);
const [productDescription ,setProductDescription] = useState("");
const [productAmount ,setProductAmount] = useState(0);
const [dholai , setDholai] = useState(0);
const [productDate,setProductDate] = useState("");
const [msg , setMsg] = useState("");
const [viewMemo , setViewMemo] = useState(false);
const [sellMemo , setSellMemo] = useState(false);
const [storeName , setStoreName] = useState("");
const [product , setProduct] = useState({});
const [issueDate,setIssueDate] = useState("");
const[amountOfKGperpacket,setAmountOfKGperpacket] = useState(0);
const [total,setTotal] = useState(0);

const values ={

    productName,
    setProductName,
    productDate,
    setProductDate,
    msg,
    setMsg,
    viewMemo,
    setViewMemo,
    sellMemo,
    setSellMemo,
    product,
    setProduct,
    storeName,
    setStoreName,
issueDate,
setIssueDate,
productType,
setProductType,
productPrice,
setProductPrice,
productDescription,
setProductDescription,
productAmount,
setProductAmount,
dholai,
setDholai,
total,
setTotal,
amountOfKGperpacket,
setAmountOfKGperpacket
};
return (
<MemoDataContext.Provider value = {values}>  {props.children} </MemoDataContext.Provider>
);
};

