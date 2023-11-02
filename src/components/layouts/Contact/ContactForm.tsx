import React from 'react';
import { toast } from 'react-toastify';

import Container from '../../common/Container';
import Button from '../../common/Button';

const ContactForm: React.FC = () => {
  const contactLists = [
    'Your Name',
    'Email Address',
    'Company Name',
    'Contact Number',
    'How can we help?',
  ];

  const handleSubmitForm = (e: any) => {
    e.preventDefault();

    toast.success('Submit successful!');
  };

  return (
    <div className='bg-white'>
      <Container padding='pt-10 pb-20'>
        <div className='px-8 mb-16'>
          <h1 className='section_title mt-11'>Leave a message</h1>
          <p className='section_subtitle mt-8'>
            Contact us if you have any questions about our company or products. We will try to
            <br />
            provide an answer within a few days.
          </p>
        </div>

        <form onSubmit={handleSubmitForm}>
          <div className='contact_form px-8 mb-20'>
            {contactLists.map((contact, index) => (
              <input key={index} type='text' placeholder={contact} className='px-3 py-4' />
            ))}
          </div>
          <div className='contact_submit flex'>
            <div className='flex'>
              <input type='checkbox' name='' id='contact_check' className='mr-3' />
              <label htmlFor='contact_check'>I agree to the Terms & Conditions</label>
            </div>
            <div>
              <Button type='submit' classBtn={'contact_submit_btn'} padding={'py-2 px-16'}>
                Submit
              </Button>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default ContactForm;
