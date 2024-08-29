import React from 'react';

const Status = () => {
  return (
    <div className='fullPage'>
      <div className='pageTop'>
        <h1>Status Check</h1>
      </div>
      <div id='status-container'>
        <h2 id='status-sentence'>Want to check the status of your items? Search using your ticket number.</h2>
        <form id='status-form'>
            <label className='form-label'>
            Ticket Number 
            <input type='number' className='status-input' placeholder='XXX-XXX'/>
            </label>

            <button>Submit</button>
        </form>

      </div>
    </div>
  );
};

export default Status;
