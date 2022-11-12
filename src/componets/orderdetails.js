import React from "react";
import { Link } from "react-router-dom";
import CusDetailsForOrderPage from "./orderDetailsPage/CusDetailsfororderPage";
import OrderItemInOrderPage from "./orderDetailsPage/orderItemorderpage";
import SalesRepresentativesdetails from "./orderDetailsPage/saleRepresentative";

const PageOrderDetails = () => {
  return (
    <div>
      <div className="firstDiv">
        <Link to={'/'}>My orders</Link> <i className="fa-solid fa-angles-right"></i>
         <Link>Order no.( 112376)</Link> 
        <i className="fa-solid fa-angles-right"></i>
         <Link >Order details</Link>
      </div>
      <hr className="rule" />
      <CusDetailsForOrderPage/>
      <hr className="rule" />
      <OrderItemInOrderPage/>
      <hr className="rule" />
      <SalesRepresentativesdetails/>
    </div>
  );
};

export default PageOrderDetails;
