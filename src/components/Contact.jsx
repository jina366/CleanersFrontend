import React from 'react';

const Contact = () => {
  return (
    <div className='fullPage'>
      <div className='pageTop'>
        <h1>Contact Info</h1>
      </div>
      <div className='pageBottom'>
        <div id='contact-info'>
          <h2>Phone Number</h2>
          <h3>(540) XXX-XXXX</h3>
          <h2>Email</h2>
          <h3>hello@drycleaners.com</h3>
        </div>

        <div id='question-form-container'>
          <h2 id='sentence'>Have any questions or comments? Feel free to contact us anytime!</h2>
          <form id='question-form'>
            <div id='question-form-name'>
              <label className='form-label'>
                First Name
                <input name='first_name' className='question-input' />
              </label>

              <label className='form-label'>
                Last Name
                <input name='last_name' className='question-input' />
              </label>
            </div>

            <div id='question-form-info'>
              <label className='form-label form-label-info'>
                Phone Number
                <input
                  type='tel'
                  name='phone'
                  className='question-input'
                />
              </label>

              <label className='form-label form-label-info'>
                Email Address
                <input type='email' name='email' className='question-input' />
              </label>
            </div>

            <div id='question-form-message'>
              <label className='form-label'>Message</label>
              <textarea
                name='message'
                className='question-input'
                placeholder='Questions or comments?'
              />
            </div>

            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
