import React from "react";

const SalesRepresentativesdetails = () => {
  return (
    <div className="forpadmar">
      <div>
        <h3 className="firstPara">Sales Representatives details</h3>
      </div>
      <div>
        <input className="infield" type="text" name="name" placeholder="Name" />
        <input
          className="infield"
          type="text"
          name="companyname"
          placeholder="Company Name"
        />
        <input
          className="infield"
          type="email"
          name="email"
          placeholder="Contact e-mail"
        />
        <input
          className="infield"
          type="number"
          name="name"
          placeholder="Contact No."
        />
      </div>
      {/*   dilivery details */}
      <div>
        <div>
          <h3 className="firstPara">Delivery details</h3>
        </div>
        <div className="inlineAll">
        <div className="seperate">
          <p htmlFor="">Expected delivery date</p>
          <div>
            <input className="infield" type="date" name="date" id="date" />
          </div>
        </div>
        <div className="seperate">
          <p htmlFor="">Shipping Method</p>
          <div>
            <select className="selectopanother" name="method" id="shipMethod">
              <option value="fedex" selected>
                FedEx
              </option>
              <option value="ekart">EKart</option>
              <option value="vichare">Vichare</option>
            </select>
            <input
              className="infield"
              type="number"
              name="date"
              id="date"
              placeholder=" Account / Shipper No."
            />
          </div>
        </div>
        <div></div>
      </div>
      <div className="submit-div">
        <button className="submit-btn">Submit</button>
      </div>
      </div>
    </div>
  );
};
export default SalesRepresentativesdetails;
