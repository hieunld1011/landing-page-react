import React from 'react';

import Container from '../../common/Container';
import Button from '../../common/Button';

import { productImg1, productImg2, innovative, lock } from '../../../assets/about';

const About: React.FC = () => {
  return (
    <section id='about'>
      <Container padding='pt-22 pb-26' containerClass='about_main'>
        <div className='about_main_left center'>
          <picture>
            <img src={productImg1} alt='About Image' />
          </picture>
          <img src={productImg2} alt='About Values' />
        </div>

        <div className='about_main_right pb-6 pt-12'>
          <button className='about_main_btn py-2 px-3'>Our product</button>
          <h2 className='mt-6'>We are the next-gen banking experience</h2>
          <p className='mt-4'>
            Cursus tortor id velit viverra habitasse aenean commodo volutpat olmil feugiat enim
            lorem laoreet facilisi phasellus diam sapien euismo.
          </p>
          <div className='about_main_right_wrapper center mt-6 mb-16'>
            <div className='about_main_right_item mb-10'>
              <span>
                <img src={innovative} alt='innovative' />
              </span>
              <div className='about_main_right_item-title'>
                <h3 className='py-2'>Innovative</h3>
                <p>
                  Aliquam alom turpis ac nibh at morbi vestibulum vitae lorem magnis at risus eget
                  consequat euismodi.
                </p>
              </div>
            </div>
            <div className='about_main_right_item'>
              <span>
                <img src={lock} alt='innovative' />
              </span>
              <div className='about_main_right_item-title'>
                <h3 className='py-2'>Secure</h3>
                <p>
                  Eget nam sed tortor placerat tellus adipiscing rhoncus viverra amet dictumst amet
                  diam massa idol fringilla.
                </p>
              </div>
            </div>
          </div>
          <Button classBtn='about_main_btn' padding={'py-3 px-5'}>
            Get started
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default About;
