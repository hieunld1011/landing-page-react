import React from 'react';

import Container from '../../common/Container';
import ContactSection from './ContactSection';

const ContactMain: React.FC = () => {
  return (
    <Container>
      <section>
        <div className='px-8 mb-16'>
          <h1 className='section_title mt-11'>We're here to help</h1>
          <p className='section_subtitle mt-8'>
            Contact us if you have any questions about our company or products. We will try to
            <br />
            provide an answer within a few days.
          </p>
        </div>
      </section>

      <ContactSection />
    </Container>
  );
};

export default ContactMain;
