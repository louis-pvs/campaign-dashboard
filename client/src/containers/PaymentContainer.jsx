import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as actions from '../stores/actions';

import StripeCheckout from 'react-stripe-checkout';

const StyledStripeButton = styled.button`
  background-color: ${props => props.theme.primary};
  border-radius: 6px;
  border: 0;
  color: ${props => props.theme.textOnPrimary};
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  height: 2.5em;
  outline: none;
  padding: 0 1em;
`;

class Payments extends React.PureComponent {
  render() {
    return (
      <StripeCheckout
        name="Campaign"
        description="$5 for 5credits"
        amount={500}
        token={this.props.handleStripeToken}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <StyledStripeButton>Add Credits</StyledStripeButton>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  { handleStripeToken: actions.handleStripeToken }
)(Payments);
