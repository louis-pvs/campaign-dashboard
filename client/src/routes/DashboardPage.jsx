import React, { PureComponent } from 'react';

import PaymentContainer from '../containers/PaymentContainer';

class DashboardContainer extends PureComponent {
  render() {
    return (
      <div>
        <h1>This is Dashboard page</h1>
        <PaymentContainer />
      </div>
    );
  }
}

export default DashboardContainer;
