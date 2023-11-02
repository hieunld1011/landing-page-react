import './styles.scss';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

import Button from '../../common/Button';

import useRouteLinks from '../../../hooks/useRouteLinks';

const Sidebar = ({ setIsNavOpen, isNavOpen }: { setIsNavOpen: any; isNavOpen: boolean }) => {
  const headerLinks = useRouteLinks();

  const handleClickOpenSidebar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header id='header_mobile'>
      <nav className='header_mobile_wrapper'>
        <Button
          classBtn='header_mobile_close'
          margin={'mt-5'}
          padding={'p-1'}
          onClick={handleClickOpenSidebar}
        >
          <AiOutlineClose size='1.25rem' />
        </Button>
        <ul>
          {headerLinks.map((link) => (
            <Link key={link.label} className='ml-6 px-2 py-6' to={link.href}>
              {link.label}
            </Link>
          ))}
          <Button classBtn={'header_mobile_login'} padding={'py-2'} margin={'ml-6'}>
            <Link className='py-2 px-4' to='/login'>
              Login
            </Link>
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default Sidebar;
