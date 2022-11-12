import React from "react";

const CusDetails = () => {
  return (
    <div className="forpadmar">
      <div >
        <h3 className="firstPara">Customer Details</h3>
      </div>
      <div>
        <input className="infield" type="text" placeholder="Customer ID" />
        <input className="infield" type="text" placeholder="Customer Name" />
        <input className="infield" type="text" placeholder="Company Name" />
      </div>

      <div>
        <input className="infield" type="text" placeholder="Contact e-mail" />
        <select className="selectop" name="country" id="country">
          <option value="default" selected>
            Country
          </option>
          <option value="india">India</option>
          <option value="china">China</option>
          <option value="usa">USA</option>
        </select>
        <select className="selectop" name="state" id="country">
          <option value="default" selected>
            State
          </option>
          <option value="maharashtra">Maharashtra</option>
          <option value="gujrat">Gujrat</option>
          <option value="karnataka">Karnataka</option>
        </select>
        <select className="selectop" name="city" id="country">
          <option value="default" selected>
            City
          </option>
          <option value="mumbai">Mumbai</option>
          <option value="naviMumbai">Navi-Mumbai</option>
          <option value="pune">Pune</option>
        </select>
        <input className="infield" type="text" placeholder="ZIP Code" />
      </div>
      <div className="textareadiv">
        <div className="innertextdiv">
        <p>Billing Address</p>
        <textarea className="textarea" name="" id="" cols="40" rows="10"></textarea>
        </div>
        <div>
        <p>Shipping Address</p>
        <textarea className="textarea" name="" id="" cols="40" rows="10"></textarea>
        </div>
      </div>
    </div>
  );
};

export default CusDetails;