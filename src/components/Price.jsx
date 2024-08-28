import React from 'react';

const Price = () => {
  return (
    <div className='fullPage'>
      <div className='pageTop'>
        <h1>Price Chart</h1>
      </div>
      <div className='pageBottom' id='price-container'>
        <div id='laundry-container'>
          <h2>Laundry</h2>
          <table className='price-table'>
            <tr>
              <td>Shirt-on hanger</td>
              <td>$3.45</td>
            </tr>
            <tr>
              <td>Shirt-boxed</td>
              <td>$4.45</td>
            </tr>
          </table>
        </div>
        <div id='dry-cleaning-container'>
          <h2>Dry Cleaning</h2>
          <table className='price-table'>
            <tr>
              <td>Shirt</td>
              <td>$5.45</td>
            </tr>
            <tr>
              <td>Pants</td>
              <td>$7.25</td>
            </tr>
            <tr>
              <td>2pc suit</td>
              <td>$12.70</td>
            </tr>
            <tr>
              <td>Jacket</td>
              <td>$8.25</td>
            </tr>
            <tr>
              <td>Dress</td>
              <td>$13.45</td>
            </tr>
            <tr>
              <td>Sweater</td>
              <td>$8.50</td>
            </tr>
          </table>
        </div>
        <div id='household-container'>
          <h2>Household</h2>
          <table className='price-table'>
            <tr>
                <td>Comforter</td>
                <td>$36 & up</td>
            </tr>
            <tr>
                <td>Blanket</td>
                <td>$25 & up</td>
            </tr>
            <tr>
                <td>Sheet</td>
                <td>$32 & up</td>
            </tr>
          </table>
        </div>
      </div>
      <div id='bottom'>
        <p id='price-message'>
          Please note the above prices are base prices and there maybe
          additional charges depending on fabric, cleaning & pressing method.
          Prices are subject to change without prior notice.
        </p>
      </div>
    </div>
  );
};

export default Price;
