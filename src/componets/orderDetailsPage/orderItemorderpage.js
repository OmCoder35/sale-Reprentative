import React from "react";

const OrderItemInOrderPage = () => {
  return (
    <div className="forpadmar">
      <div>
        <h3 className="firstPara">Order Items</h3>
      </div>
      <table className="tab">
        <tr>
          <th>Product Name</th>
          <th>SKU</th>
          <th>Style No.</th>
          <th>Style</th>
          <th>Color</th>
          <th>Size</th>
          <th>UPC</th>
          <th>Quantity Ordered</th>
          <th>Confirm Quantity</th>
        </tr>
        <tr>
          <td></td>
          <td>VZSE93303-8</td>
          <td>VZSE93303</td>
          <td>CLASSICO</td>
          <td></td>
          <td></td>
          <td></td>
          <td>400</td>
          <td className="action-btn">
            <input
              className="infieldsecond"
              type="text"
              id="quentity"
              name="quentity"
              value="400"
              readonly
            />
            <i class="fa-regular  fa-pen-to-square"></i>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default OrderItemInOrderPage;
