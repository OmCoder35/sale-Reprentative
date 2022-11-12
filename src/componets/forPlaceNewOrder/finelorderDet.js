const FinelOrderDetail = () => {
  return (
    <div className="forpadmar">
      <div>
        <h3 className="firstPara">Final order details</h3>
      </div>
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
            <td className="action-btn"><i class="fa-solid fa-trash"></i></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>300</td>
            <td className="action-btn"><i class="fa-solid fa-trash"></i></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>650</td>
            <td className="action-btn"><i class="fa-solid fa-trash"></i></td>
        </tr>
      </table>
    </div>
  );
};

export default FinelOrderDetail;