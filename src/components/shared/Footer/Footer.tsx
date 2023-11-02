import './styles.scss';
import { Link } from 'react-router-dom';

import { facebookIcon, twitterIcon, linkedinIcon, youtubeIcon } from '../../../assets/footer';
import logoWhite from '../../../assets/images/logo_white.png';
import Container from '../../common/Container';

const Footer = () => {
  const listIcons = [
    {
      icon: facebookIcon,
      alt: 'facebook',
    },
    {
      icon: linkedinIcon,
      alt: 'linkedin',
    },
    {
      icon: twitterIcon,
      alt: 'twitter',
    },
    {
      icon: youtubeIcon,
      alt: 'youtube',
    },
  ];

  const listLinks = [
    {
      title: 'Product',
      lists: ['How it Works', 'Services', 'Pricing'],
    },
    {
      title: 'Company',
      lists: ['About', 'FAQ', 'Contact', 'Blog'],
    },
    {
      title: 'Utility',
      lists: ['Privacy Policy', 'Terms of Use', '404 page', 'Protected page'],
    },
  ];

  return (
    <footer className='pt-16'>
      <Container>
        <div className='footer_main mb-8'>
          <div className='footer_main_left'>
            <img src={logoWhite} alt='logo' />
            <p className='my-8'>
              Lorem ipsum dolor sit amet suspendisse varius. Duis cursus, mi quis viverra ornare.
            </p>
            <ul>
              {listIcons.map((icon) => (
                <Link to={'/'} key={icon.alt}>
                  <img src={icon.icon} alt={icon.alt} />
                </Link>
              ))}
            </ul>
          </div>
          <div className='footer_main_right'>
            {listLinks.map((item) => (
              <article key={item.title}>
                <h5 className='mb-12'>{item.title}</h5>
                <ul>
                  {item.lists.map((list) => (
                    <Link key={list} to={'/'}>
                      {list}
                    </Link>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Container>
      <hr />
      <Container>
        <p className='footer_lower'>
          © Starthub X by
          <span className='ml-1'>Duy Hieu</span>. Powered by Webflow
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
