import './styles.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PiListBold } from 'react-icons/pi';

import Container from '../../common/Container';
import Button from '../../common/Button';

import useRouteLinks from '../../../hooks/useRouteLinks';
import Logo from '../../../assets/images/logo.png';
import { PATH_USER_LOGIN } from '../../../routes/router.path';
import Sidebar from './Sidebar';

const Header: React.FC = () => {
  const headerLinks = useRouteLinks();
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [stickyBar, setStickyBar] = useState<boolean>(false);

  const handleClickOpenSidebar = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      (window.pageYOffset || window.scrollY) > 300 ? setStickyBar(true) : setStickyBar(false);
    });
  }, [stickyBar]);

  return (
    <>
      <header className={`${stickyBar && 'fixed-nav'}`}>
        <Container ariaLabel='primary'>
          <div className='header_wrapper'>
            <div className='header_wrapper_left'>
              <Link to='/'>
                <img src={Logo} alt='logo' />
              </Link>
            </div>

            <div className='header_wrapper_middle'>
              {headerLinks.map((link) => (
                <Link key={link.label} className='mr-5' to={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>

            <div className='header_wrapper_right'>
              <Button>
                <Link className='py-2 px-4' to={PATH_USER_LOGIN}>
                  Login
                </Link>
              </Button>
              <Button
                classBtn='header_toggle_button'
                margin={'ml-7'}
                onClick={handleClickOpenSidebar}
              >
                <PiListBold size='1.5rem' />
              </Button>
            </div>
          </div>
        </Container>
      </header>

      {isNavOpen && <Sidebar setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />}
    </>
  );
};

export default Header;
