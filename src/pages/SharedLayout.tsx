import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components/shared';
import Wrapper from '../components/common/Wrapper';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </>
  );
};

export default SharedLayout;
