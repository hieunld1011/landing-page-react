import './styles/styles.scss';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/router.routes';
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
        <ToastContainer autoClose={3000} />
      </BrowserRouter>
    </>
  );
};

export default App;
