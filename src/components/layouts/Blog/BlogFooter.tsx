import React from 'react';
import Button from '../../common/Button';

const BlogFooter: React.FC = () => {
  return (
    <div className='px-8 mt-40 mb-20'>
      <h1 className='blog_title mt-11'>Get great articles direct to your inbox</h1>
      <p className='blog_subtitle mt-8'>
        The latest Move news, articles, and resources, sent straight to your inbox every month.
      </p>
      <div className='blog_email mt-8'>
        <input type='email' name='' id='' placeholder='Email Address' className='blog_input p-4' />
        <Button padding={'py-3 px-8'} classBtn={'blog_subscribe'}>
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default BlogFooter;
