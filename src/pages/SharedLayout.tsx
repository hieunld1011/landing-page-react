import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components/shared';
import Wrapper from '../components/common/Wrapper';

const SharedLayout = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Outlet />
        <Footer />
      </Wrapper>
    </>
  );
};

export default SharedLayout;
