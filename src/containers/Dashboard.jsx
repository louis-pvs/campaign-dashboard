import React, { PureComponent } from 'react';
import requireAuth from './requiredAuth';

class DashboardContainer extends PureComponent {
  render() {
    return (
      <div>
        <h1>This is Dashboard page</h1>
      </div>
    );
  }
}

export default requireAuth(DashboardContainer);
