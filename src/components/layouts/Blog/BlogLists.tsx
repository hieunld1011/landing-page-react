import React from 'react';
import { Link } from 'react-router-dom';

import Span from '../../common/Span';

import useBlogLists from '../../../hooks/useBlogLists';
import { AiOutlineArrowRight } from 'react-icons/ai';

const BlogLists: React.FC = () => {
  let blogItems = useBlogLists(3);
  blogItems = blogItems.splice(0, 12);

  return (
    <div className='blog_main'>
      {blogItems.map((item, index) => (
        <Link to={'/blog'} key={index} className='blog_main_item'>
          <img src={item.img} alt={item.desc} />
          <div className='px-5 pt-3 pb-5'>
            <h5 className='mb-1'>{item.date}</h5>
            <label>{item.title}</label>
            <p className='my-3'>{item.desc}</p>
            <Span color={'blue_color'} classSpan='align-center'>
              Read story
              <AiOutlineArrowRight className={'ml-1'} />
            </Span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogLists;
