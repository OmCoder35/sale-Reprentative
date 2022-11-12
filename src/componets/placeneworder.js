
import React from "react";
import CusDetails from "./forPlaceNewOrder/cusDetails";
import SelectProduct from "./forPlaceNewOrder/selectProduct";
import FinelOrderDetail from "./forPlaceNewOrder/finelorderDet";
import DiliveryDetails from "./forPlaceNewOrder/diliveryDetails";
import { Link } from "react-router-dom";
import '../style/placeneworder.css'

const PlaceNewOrder = () => {
  return (
    <div>
      <div className="firstDiv">
        <Link to={'/'}>My orders</Link>  <i class="fa-solid fa-angles-right"></i>{" "}
        <Link to={'/my_customers'}>Place new order</Link>
      </div>
      <hr className="rule"/>
      <CusDetails/>
      <hr className="rule"/>
      <SelectProduct/>
      <hr className="rule"/>
      <FinelOrderDetail/>
      <hr className="rule"/>
      <DiliveryDetails/>
    </div>
  );
};

export default PlaceNewOrder;