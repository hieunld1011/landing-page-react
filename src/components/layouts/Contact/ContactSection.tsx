import './styles.scss';
import React from 'react';

import { MdEmail, MdLocationOn } from 'react-icons/md';
import { TbPhoneCall } from 'react-icons/tb';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Span from '../../common/Span';

const ContactSection: React.FC = () => {
  const contactSetions = [
    {
      color: '#2d89ff',
      bgColor: 'contact1-bgColor',
      icon: MdEmail,
      title: 'Email Us',
      desc: 'Ask us a question by emal and we will respond within a few days.',
      direct: 'Leave a message',
      arrow: true,
    },
    {
      color: '#4fc553',
      bgColor: 'contact2-bgColor',
      icon: MdLocationOn,
      title: 'Drop in Us',
      desc: 'You can meet us at our office and discuss the details of your question.',
      direct: 'Get directions',
      arrow: true,
    },
    {
      color: '#f07638',
      bgColor: 'contact3-bgColor',
      icon: TbPhoneCall,
      title: 'Call any time',
      desc: 'Call us if your question requires an immediate response',
      direct: '+1 800 778 884',
      arrow: false,
    },
  ];

  return (
    <div className='contact_section_wrapper mb-20'>
      {contactSetions.map((section) => (
        <div key={section.title} className='contact_section_item px-6 py-8'>
          <article className='flex flex-col'>
            <div className='flex'>
              <span className={`contact_section_item_icon ${section.bgColor} p-3`}>
                {<section.icon size={32} color={section.color} />}
              </span>
            </div>
            <h3 className='mt-6'>{section.title}</h3>
            <p className='my-4'>{section.desc}</p>
            <Span color={'blue_color'} classSpan='align-center'>
              {section.direct}
              {section.arrow && <AiOutlineArrowRight className={'ml-2'} />}
            </Span>
          </article>
        </div>
      ))}
    </div>
  );
};

export default ContactSection;
