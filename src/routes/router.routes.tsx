import { Routes as Router, Route } from 'react-router-dom';
import { PATH_BLOG, PATH_CONTACT, PATH_HOME, PATH_USER_LOGIN } from './router.path';
import SharedLayout from '../pages/SharedLayout';

const Routes = () => {
  return (
    <Router>
      <Route path={PATH_HOME} element={<SharedLayout />}>
        {/* <Route index element={<HomePage />} /> */}
        {/* <Route path={PATH_USER_LOGIN} element={<LoginPage />} /> */}
        {/* <Route path={`${PATH_BLOG}/:id`} element={<BlogDetailPage />} /> */}
        {/* <Route path={PATH_CONTACT} element={<ContactPage />} /> */}
        {/* <Route path='/profile' element={<ProtectedRoute children={<ProfilePage />} />} /> */}
      </Route>
    </Router>
  );
};

export default Routes;
