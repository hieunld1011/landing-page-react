import LoginForm from '../components/layouts/Auth/LoginForm';
import Wrapper from '../components/common/Wrapper';

const LoginPage: React.FC = () => {
  return (
    <Wrapper classWrapper='center bg-white'>
      <LoginForm />
    </Wrapper>
  );
};

export default LoginPage;
