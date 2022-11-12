import React from "react";
import { ReactDOM } from "react";
import { Routes, Route } from "react-router-dom";
import CreateCustomer from "./componets/createcustomer";
import PlaceNewOrder from "./componets/placeneworder";
import OrderHistory from "./componets/orderhistory";
import PageOrderDetails from "./componets/orderdetails";
import CustomerTablePage from "./componets/customerTable";
function App() {
  return (
    <Routes>
      <Route path="/" element={<OrderHistory />} />
      <Route path="/add_new_customer" element={<CreateCustomer />} />
      <Route path="/place_new_order" element={<PlaceNewOrder />} />
      <Route path="/order_details" element={<PageOrderDetails />} />
      <Route path="/my_customers" element={<CustomerTablePage />} />
    </Routes>
  );
}

export default App;
