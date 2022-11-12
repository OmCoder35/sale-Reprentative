import React from "react";
import { Link } from "react-router-dom";
import '../style/custable.css'

const CustomerTablePage = () => {
  return (
    <div>
      <div className="rightMenu">
        <p>
          <i className="fa-regular fa-user icoedit"></i>Richard Trecartin
        </p>
      </div>
      <hr className="rule"/>
      <div className="firstDiv">
        <Link to={'/'}>My Orders </Link><i className="fa-solid fa-angles-right"></i>{" "}
        <Link to={'/my_customers'}> My Customers</Link>
      </div>
      <hr className="rule"/>
      <div className="buttonedit">
        <Link to={'/add_new_customer'}><button className="btn">+ Add new customer</button></Link>
      </div>
      <hr className="rule"/>
      <table className="tab">
        <tr>
          <th>Customer ID</th>
          <th>Customer Name</th>
          <th>Customer E-mail</th>
          <th>Contact No.</th>
          <th>Country</th>
          <th>State</th>
          <th>City</th>
          <th>Zip code</th>
          <th>Date Added</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>1245</td>
          <td>Annie’s Sports</td>
          <td>Arkham@erthy.com</td>
          <td>6343293245</td>
          <td>US</td>
          <td>Texas</td>
          <td>New york</td>
          <td>627363</td>
          <td>27/09/2022</td>
          <td>
            <span className="action-btn">
              <i className="fa-sharp fa-solid fa-eye"></i>
              <i class="fa-regular fa-pen-to-square"></i>
            </span>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default CustomerTablePage;
