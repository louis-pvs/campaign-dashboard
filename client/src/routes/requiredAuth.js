import React from 'react';
import { connect } from 'react-redux';

const requireAuth = ProtectedComponent => {
  const Component = ({ authenticated, ...otherProps }) => {
    if (authenticated) return <ProtectedComponent {...otherProps} />;
    return (
      <div>
        <h2>Unauthorized</h2>
        <p>please login before you continue</p>
      </div>
    );
  };
  const mapStateToProps = ({ authStore }) => ({
    authenticated: !!authStore.user
  });
  return connect(mapStateToProps)(Component);
};

export default requireAuth;
