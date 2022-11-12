import React from "react";

const ShippingAdd = () => {
  return (
    <div className="forpadmar">
      <div className="firstPara">
        <span className="firstPara">Shipping Address</span>
        <button className="btn">Add new address</button>
      </div>
      <div>
        <div>
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
        <div>
          <textarea
            className="textarea"
            name=""
            id=""
            cols="150"
            rows="7.5"
            placeholder="Type an address here........"
          ></textarea>
        </div>
        <div className="checkdiv">
          <input className="checkbox" type="checkbox" name="" id="" />
          <label htmlFor="">Add as a shipping address</label>
          <input className="checkbox" type="checkbox" name="" id="" />
          <label htmlFor="">Add as a shipping address </label>
          <div className="divbuttons">
            <button className="btn">Save</button>
            <button className="btn">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingAdd;
