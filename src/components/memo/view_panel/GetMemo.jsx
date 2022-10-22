import React ,{useState} from "react"; 
import data from "../MemoModel/data.json"

const GetMemo = () =>{
const [goods,setGoods]= useState(data);
console.log(goods);
 return(
 <div>
 <table>
    <thead>
        <tr>
            <th>Store Name</th>
            <th>Date</th>
            <th>Product Name</th>
            <th>Product Type</th>
            <th>Product Description</th>
            <th>Product Price</th>
            <th>Amount</th>
            <th>Dholai</th>
            <th>Total</th>
        </tr>
    </thead>
    <tbody>
        {goods.map((good) =>(
            <tr>
                <td>{good.storeName}</td>
                <td>{good.issueDate}</td>
                <td>{good.productName}</td>
                <td>{good.productType}</td>
                <td>{good.productDescription}</td>
                <td>{good.productPrice}</td>
                <td>{good.productAmount}</td>
                <td>{good.dholai}</td>
                <td>{good.total}</td>
            </tr>
        
        ))}
    </tbody>
 </table>
 
 </div>
    );
};
export default GetMemo;