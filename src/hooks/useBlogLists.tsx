import blog1 from '../assets/blog/blog1.png';
import blog2 from '../assets/blog/blog2.png';
import blog3 from '../assets/blog/blog3.png';

const useBlogLists = (numberOfItems: number) => {
  const blogItems = [
    {
      img: blog1,
      alt: 'Blog 1' as string,
      date: 'May 3, 2022' as string,
      title: 'Business' as string,
      desc: 'Is it smart to invest in crypto in 2022? What you need to know' as string,
    },
    {
      img: blog2,
      alt: 'Blog 2' as string,
      date: 'Jun 16, 2022' as string,
      title: 'Management' as string,
      desc: 'How to save money - 8 simple ways to start saving money every month' as string,
    },
    {
      img: blog3,
      alt: 'Blog 3' as string,
      date: 'Dec 24, 2022' as string,
      title: 'Finances' as string,
      desc: 'A guide to working remotely: How to maximize productivity.' as string,
    },
    {
      img: blog1,
      alt: 'Blog 1' as string,
      date: 'May 3, 2022' as string,
      title: 'Business' as string,
      desc: 'Is it smart to invest in crypto in 2022? What you need to know' as string,
    },
    {
      img: blog2,
      alt: 'Blog 2' as string,
      date: 'Jun 16, 2022' as string,
      title: 'Management' as string,
      desc: 'How to save money - 8 simple ways to start saving money every month' as string,
    },
    {
      img: blog3,
      alt: 'Blog 3' as string,
      date: 'Dec 24, 2022' as string,
      title: 'Finances' as string,
      desc: 'A guide to working remotely: How to maximize productivity.' as string,
    },
    {
      img: blog1,
      alt: 'Blog 1' as string,
      date: 'May 3, 2022' as string,
      title: 'Business' as string,
      desc: 'Is it smart to invest in crypto in 2022? What you need to know' as string,
    },
    {
      img: blog2,
      alt: 'Blog 2' as string,
      date: 'Jun 16, 2022' as string,
      title: 'Management' as string,
      desc: 'How to save money - 8 simple ways to start saving money every month' as string,
    },
    {
      img: blog3,
      alt: 'Blog 3' as string,
      date: 'Dec 24, 2022' as string,
      title: 'Finances' as string,
      desc: 'A guide to working remotely: How to maximize productivity.' as string,
    },
  ];

  return blogItems.splice(0, numberOfItems * 3);
};

export default useBlogLists;
