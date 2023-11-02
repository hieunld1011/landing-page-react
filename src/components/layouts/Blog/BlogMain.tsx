import React from 'react';
import './styles.scss';

import Container from '../../common/Container';
import BlogLists from './BlogLists';
import Button from '../../common/Button';

import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import BlogFooter from './BlogFooter';

const BlogMain: React.FC = () => {
  return (
    <Container>
      <section id='blog'>
        <div className='px-8 mb-42'>
          <h1 className='section_title mt-11'>
            The news that surround
            <br />
            us is collected here
          </h1>
          <p className='section_subtitle mt-8'>
            Read watch and absorb the content that we publish in our news blog. Also leave
            <br />
            comments and communicate with other users.
          </p>
        </div>
      </section>

      <BlogLists />
      <div className='mt-20 center blog_pagination'>
        <Button classBtn={'button_pagination_mark'} margin={'mr-2'} padding={'px-3'}>
          <AiOutlineLeft size={20} />
        </Button>
        {[1, 2, 3].map((item, index) =>
          item == 1 ? (
            <Button
              key={index}
              classBtn={'button_pagination active'}
              margin={'mx-2'}
              padding={'px-4'}
            >
              {item}
            </Button>
          ) : (
            <Button key={index} classBtn={'button_pagination'} margin={'mx-2'} padding={'px-4'}>
              {item}
            </Button>
          ),
        )}
        <Button classBtn={'button_pagination_mark'} margin={'ml-2'}>
          <AiOutlineRight size={20} />
        </Button>
      </div>

      <BlogFooter />
    </Container>
  );
};

export default BlogMain;
