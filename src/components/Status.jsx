import React from 'react';

const Status = () => {
  return (
    <div className='fullPage'>
      <div className='pageTop'>
        <h1>Status Check</h1>
      </div>
      <div>
        <form>
            <label>
            Ticket Number 
            <input type='number'/>
            </label>

            <button>Submit</button>
        </form>

      </div>
    </div>
  );
};

export default Status;
