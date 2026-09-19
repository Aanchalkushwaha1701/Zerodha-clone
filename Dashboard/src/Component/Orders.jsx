import React ,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Orders = () => {
  const [allorders,setAllOrders]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8080/allorder").then((res)=>{
      setAllOrders(res.data);
    })
  },[])
  return (
    <div className="orders">
      {allorders.length===0?(
      <div className="no-orders">
        <p>You haven't placed any orders today</p> 

         <Link to={"/"} className="btn">
          Get started
        </Link>
        </div>
        ):(
          <div className="order-table">
  <table>
    <thead>
      <tr>
        <th>Stock</th>
        <th>Qty.</th>
        <th>Price</th>
        <th>Mode</th>
      </tr>
    </thead>

    <tbody>
      {allorders.map((order, index) => (
        <tr key={order._id || index}>
          <td>{order.name}</td>
          <td>{order.qty}</td>
          <td>₹{order.price}</td>
          <td className={order.mode === "BUY" ? "buy" : "sell"}>
            {order.mode}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
        )}
      </div>
   
  );
};

export default Orders;