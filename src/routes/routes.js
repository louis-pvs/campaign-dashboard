import LandingContainer from '../containers/Landing';
import DashboardContainer from '../containers/Dashboard';

export default {
  landing: {
    placeholder: 'Home',
    path: '/',
    component: () => LandingContainer
  },
  dashboard: {
    requireAuth: true,
    placeholder: 'Profile',
    path: '/dashboard',
    component: () => DashboardContainer
  }
};
