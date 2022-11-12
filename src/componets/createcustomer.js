import "../style/createcus.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import ShippingAdd from "./forCreateCustomer/shipingdet";

const CreateCustomer = () => {
  const [inputs, setInputs] = useState({
    cusid: "",
    companyname: "",
    billaddress: "",
    contactno: "",
    country: "",
    zipcode: "",
  });

  const handleonchange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInput) => {
      return { ...prevInput, [name]: value };
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    const newSale = {
      cusid: inputs.cusid,
      companyname: inputs.companyname,
      billaddress: inputs.billaddress,
      contactno: inputs.contactno,
      country: inputs.country,
      zipcode: inputs.zipcode,
    };
    axios.post("https://localhost:3003/create", newSale);
  };

  return (
    <div>
      <div className="firstDiv">
        <Link to={"/my_customers"}>My customers</Link>
        <i class="fa-solid fa-angles-right"></i>{" "}
        <Link to={"/"}>Create new customer</Link>
      </div>
      <hr className="rule" />
      <div className="firstContain">
        <div className="forpadmar">
          <div>
            <p className="firstPara">Customer Details</p>
          </div>
          <div>
            <input
              className="infield"
              type="text"
              placeholder="Company Name"
              name="companyname"
              value={inputs.companyname}
              onChange={handleonchange}
            />
            <input
              className="infield"
              type="text"
              placeholder="Company Name"
              name="companyname"
            />
          </div>
          <div>
            <input
              className="infield"
              type="text"
              placeholder="Contact e-mail"
              name="email"
            />
            <input
              className="infield"
              type="number"
              placeholder="Contact no."
              name="contactno"
              value={inputs.contactno}
              onChange={handleonchange}
            />
          </div>
          <div>
            <input
              className="infield"
              type="text"
              placeholder="Country"
              name="country"
              value={inputs.country}
              onChange={handleonchange}
            />
            <select className="selectop" name="state" id="state">
              <option value="default" selected>
                State
              </option>
              <option value="maharashtra">Maharashtra</option>
              <option value="gujrat">Gujrat</option>
              <option value="karnataka">Karnataka</option>
            </select>
            <select className="selectop" name="city" id="city">
              <option value="default" selected>
                City
              </option>
              <option value="mumbai">Mumbai</option>
              <option value="naviMumbai">Navi-Mumbai</option>
              <option value="pune">Pune</option>
            </select>
            <input
              className="infield"
              type="number"
              placeholder="ZIP Code"
              name="zipcode"
              value={inputs.zipcode}
              onChange={handleonchange}
            />
          </div>
        </div>
        <hr className="rule" />
        {/* billing address */}
        <div className="forpadmar">
          <div className="firstPara">
            <span>Billing Address</span>
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
              <input
                className="infield"
                type="text"
                placeholder="ZIP Code"
                onChange={handleonchange}
              />
            </div>
            <div>
              <textarea
                className="textarea"
                name="billaddress"
                value={inputs.billaddress}
                id=""
                cols="150"
                rows="7.5"
                placeholder="Type an address here........"
                onChange={handleonchange}
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
        <hr className="rule" />

        {/* table details */}
        <div className="forpadmar">
          <table className="tab">
            <tr>
              <th>Sr. No.</th>
              <th>Attention</th>
              <th>Address</th>
              <th>Contact No.</th>
              <th>Country</th>
              <th>State</th>
              <th>City</th>
              <th>Zip code</th>
              <th>Actions</th>
            </tr>
            <tr>
              <td>1.</td>
              <td>Annie McKenzie</td>
              <td>15352, Ranson Rd, Arlington, Texas, 647462</td>
              <td>+19864327465</td>
              <td>United States</td>
              <td>Texas</td>
              <td>Houston</td>
              <td>647462</td>
              <td className="action-btn">
                <i className="fa-regular fa-circle-check"></i>
                <i className="fa-regular fa-pen-to-square"></i>
                <i className="fa-solid fa-trash"></i>
              </td>
            </tr>
          </table>
        </div>
        {/* table details */}

        <hr className="rule" />
        <ShippingAdd />
        <hr className="rule" />
        {/* table details */}
        <div className="forpadmar">
          <table className="tab">
            <tr>
              <th>Sr. No.</th>
              <th>Attention</th>
              <th>Address</th>
              <th>Contact No.</th>
              <th>Country</th>
              <th>State</th>
              <th>City</th>
              <th>Zip code</th>
              <th>Actions</th>
            </tr>
            <tr>
              <td>1.</td>
              <td>Annie McKenzie</td>
              <td>15352, Ranson Rd, Arlington, Texas, 647462</td>
              <td>+19864327465</td>
              <td>United States</td>
              <td>Texas</td>
              <td>Houston</td>
              <td>647462</td>
              <td className="action-btn">
                <i className="fa-regular fa-circle-check"></i>
                <i className="fa-regular fa-pen-to-square"></i>
                <i className="fa-solid fa-trash"></i>
              </td>
            </tr>
          </table>
        </div>
        {/* table details */}

        <hr className="rule" />
        <div className="forpadmar">
          <h3>
            <label htmlFor="note">Note:</label>
          </h3>
          <div>
            <textarea
              className="textarea1"
              name="note"
              id="note"
              cols="100"
              rows="8"
            ></textarea>
          </div>
          <div className="submit-div">
            <button onClick={handleClick} className="submit-btn" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCustomer;
