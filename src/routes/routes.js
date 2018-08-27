import Loadable from 'react-loadable';
import requireAuth from './requiredAuth';
import PageLoader from '../views/PageLoader';

export default {
  landing: {
    placeholder: 'Home',
    path: '/',
    component: () =>
      Loadable({
        loader: () => import('./LandingPage'),
        loading: PageLoader,
        timeout: 5000
      })
  },
  dashboard: {
    placeholder: 'Profile',
    path: '/dashboard',
    component: () =>
      requireAuth(
        Loadable({
          loader: () => import('./DashboardPage'),
          loading: PageLoader,
          timeout: 5000
        })
      )
  }
};
