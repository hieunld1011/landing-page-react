import { Routes as Router, Route } from 'react-router-dom';
import { PATH_BLOG, PATH_CONTACT, PATH_HOME, PATH_USER_LOGIN } from './router.path';
import SharedLayout from '../pages/SharedLayout';
import HomePage from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';
import LoginPage from '../pages/LoginPage';
import ContactPage from '../pages/ContactPage';

const Routes = () => {
  return (
    <Router>
      <Route path={PATH_HOME} element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path={PATH_BLOG} element={<BlogPage />} />
        <Route path={PATH_CONTACT} element={<ContactPage />} />
        {/* <Route path='/profile' element={<ProtectedRoute children={<ProfilePage />} />} /> */}
      </Route>
      <Route path={PATH_USER_LOGIN} element={<LoginPage />} />
    </Router>
  );
};

export default Routes;
