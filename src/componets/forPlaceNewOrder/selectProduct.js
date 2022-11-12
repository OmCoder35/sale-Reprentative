const SelectProduct = () => {
  return (
    <div className="forpadmar">
      <div>
        <h3 className="firstPara">Select Product</h3>
      </div>
      <div className="searchboxdiv">
        <input type="search" name="searchproducts" id="search" placeholder="Search by Style, SKU, ASIN, or Product name"/>
        <button className="btn">Search</button>
      </div>
      <hr />
      <table className="tab">
        <tr>
        <th>Product Name</th>
        <th>Style No.</th>
        <th>Style</th>
        <th>Color</th>
        <th>Size</th>
        <th>SKU</th>
        <th>UPC</th>
        <th>Quantity</th>
        <th></th>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>400</td>
            <td><i class="fa-sharp fa-solid fa-cart-shopping"></i> Added to order</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>400</td>
            <td><button className="btncart">+ Add to order</button></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>400</td>
            <td><button className="btncart">+ Add to order</button></td>
        </tr>
      </table>
    </div>
  );
};

export default SelectProduct;
