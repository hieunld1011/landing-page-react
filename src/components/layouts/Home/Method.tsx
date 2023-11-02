import React from 'react';

import Container from '../../common/Container';

import { step1, step2, step3, stepImg, customer2, customer3 } from '../../../assets/method';
import Button from '../../common/Button';
import Span from '../../common/Span';

const Method: React.FC = () => {
  const methodSteps = [
    {
      src: step1,
      alt: 'step 1',
      title: '1. Download our app' as string,
      desc: `Suspendisse in amet volutpat et cras sit velit magna risus posuere volutpat laoreet
            dictum lectus tellus massa nec vel proin` as string,
    },
    {
      src: step2,
      alt: 'step 2',
      title: '2. Create an account' as string,
      desc: `Suspendisse in amet volutpat et cras sit velit magna risus posuere volutpat laoreet
              dictum lectus tellus massa nec vel proin` as string,
    },
    {
      src: step3,
      alt: 'step 3',
      title: '3. Start Investing' as string,
      desc: `Suspendisse in amet volutpat et cras sit velit magna risus posuere volutpat laoreet
              dictum lectus tellus massa nec vel proin` as string,
    },
  ];

  const methodDetails = [
    {
      number: '99' as string,
      symbol: '%' as string,
      color: 'red_color' as string,
      desc: 'Customer satisfaction' as string,
    },
    {
      number: '205M' as string,
      symbol: '+' as string,
      color: 'green_color' as string,
      desc: 'Monthly active users' as string,
    },
    {
      number: '100K' as string,
      symbol: '+' as string,
      color: 'yellow_color' as string,
      desc: 'New users per week' as string,
    },
    {
      number: '55' as string,
      symbol: '%' as string,
      color: 'blue_color' as string,
      desc: 'Growth year-over-year' as string,
    },
  ];

  return (
    <Container>
      <section id='method'>
        <div className='center mt-12'>
          <Button classBtn='section_btn' padding={'px-4 py-2'}>
            Finance app
          </Button>
        </div>

        <div className='px-8 mb-20'>
          <h1 className='section_title mt-11'>
            It have never been easier to
            <br />
            manage your finances
          </h1>
          <p className='section_subtitle mt-8'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut luctus aliquet ut nisl
            <br />
            tortor nam lacus sit in lorem elementum scelerisque ma.
          </p>
        </div>

        <div className='method_main_upper mt-8'>
          {methodSteps.map((step) => (
            <article key={step.title}>
              <picture className='pt-6 px-4 mb-6'>
                <img src={step.src} alt={step.alt} />
              </picture>
              <h5 className='mb-4'>{step.title}</h5>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>

        <div className='pt-22 method_main_lower'>
          <div className='method_main_left py-6'>
            <button className='method_main_btn py-2 px-3'>Insights</button>
            <h2 className='mt-14'>Our company have impactful numbers</h2>
            <p className='mt-4'>
              Cursus tortor id velit viverra habitasse aenean commodo volutpat olmil feugiat enim
              lorem laoreet facilisi phasellus diam sapien euismo.
            </p>
            <div className='method_main_left_wrapper my-16'>
              {methodDetails.map((method, index) => (
                <div key={index}>
                  <h3>
                    {method.number}
                    <Span color={method.color}>{method.symbol}</Span>
                  </h3>
                  <p className='mt-2'>{method.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='method_main_right center'>
            <picture>
              <img src={stepImg} alt='method Image' />
            </picture>
            <img className='method_main_right_customer1' src={customer2} alt='method Values' />
            <img className='method_main_right_customer2' src={customer3} alt='method Values' />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Method;
