import React from "react";
import { Link } from "react-router-dom";
import '../style/orderhistory.css'

const OrderHistory = () => {
  return (
    <div>
      <div className="rightMenu">
        <p>
        <i className="fa-regular fa-user icoedit"/>Richard Trecartin
        </p>
      </div>
      <hr className="rule"/>
      <div className="firstDiv">
        <Link  to='/'>My Orders </Link><i className="fa-solid fa-angles-right"></i>
        <Link to='/my_customers'> My Customers</Link>
      </div>
      <hr className="rule"/>
      <div className="inoneline forpadmar">
        <p>
          <span>Order date :</span>From:{" "}
          <input className="anotherinfield" type="date" name="fromdate" id="date" /> To:{" "}
          <input className="anotherinfield" type="date" name="todate" id="to" />
        </p>
        <Link to='/place_new_order'><button className="btn">+ Place order</button></Link>
      </div>
      <hr className="rule"/>
      <table className="tab">
        <tr>
          <th>Merchant Order No.</th>
          <th>Brand</th>
          <th>Order Date</th>
          <th>Customer Name</th>
          <th>Exp. delivery date</th>
          <th>Products</th>
          <th>Ordered quantity</th>
          <th>Confirmed quantity</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>1245</td>
          <td>Vizari</td>
          <td>14/03/2022</td>
          <td>Annie’s Sports</td>
          <td>27/09/2022</td>
          <td>5</td>
          <td>174</td>
          <td>159</td>
          <td>Confirmed</td>
          <td>
            <span className="action-btn">
              <Link to={'/order_details'}><i className="fa-sharp fa-solid fa-eye"/></Link>
              <i class="fa-regular fa-pen-to-square"></i>
              <i class="fa-solid fa-arrow-down"></i>
            </span>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default OrderHistory;
