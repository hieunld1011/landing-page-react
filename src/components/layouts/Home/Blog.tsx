import React from 'react';

import Container from '../../common/Container';
import Button from '../../common/Button';

import useBlogLists from '../../../hooks/useBlogLists';

const Blog: React.FC = () => {
  const blogItems = useBlogLists(1);

  return (
    <Container>
      <section id='blog'>
        <div className='center mt-12'>
          <Button classBtn='section_btn' padding={'px-4 py-2'}>
            Our blog
          </Button>
        </div>

        <div className='px-8 mb-20'>
          <h1 className='section_title mt-11'>
            Take a look at our
            <br />
            articles & resources
          </h1>
        </div>

        <div className='blog_main'>
          {blogItems.map((item) => (
            <div key={item.title} className='blog_main_item'>
              <img src={item.img} alt={item.desc} />
              <div className='px-5 pt-3 pb-5'>
                <h5 className='mb-1'>{item.date}</h5>
                <label>{item.title}</label>
                <p className='mt-3'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Blog;
