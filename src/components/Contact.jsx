import React from 'react';

const Contact = () => {
  return (
    <div className='fullPage'>
      <div className='pageTop'>
        <h1>Contact Info</h1>
      </div>
      <div>
        <h2>Phone Number</h2>
        <h3>(540) XXX-XXXX</h3>
        <h2>Email</h2>
        <h3>hello@drycleaners.com</h3>
        <div>
          <form>
            <label>
              First Name
              <input name='first_name' />
            </label>

            <label>
              Last Name
              <input name='last_name' />
            </label>

            <label>
              Phone Number
              <input type='tel' name='phone_number' />
            </label>

            <label>
                Email 
                <input type='email' name='email'/>
            </label>

            <label>
                Message 
                <input type='text' name='message'/>
            </label>
          </form>
        </div>
        {/* Customer Inquiry Form */}
      </div>
    </div>
  );
};

export default Contact;
