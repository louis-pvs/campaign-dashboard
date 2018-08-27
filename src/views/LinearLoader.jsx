import React from 'react';
import styled, { keyframes } from 'styled-components';

const linearLoading = keyframes`
  0% {
    right: 100%; 
    width: 0%;
  }
  50% {
    right: 40%; 
    width: 40%;
  }
  80% {
    right: 20%;
    width: 20%;
  }
  100% {
    right: 0%; 
    width: 0%;
  }
`;

const LoadingContainer = styled.div`
  background-color: ${props =>
    props.loading ? props.theme.primaryDark : props.theme.primary};
  float: left;
  height: 3px;
  margin: 0;
  position: relative;
  transition: background-color 0.25s ease-in-out;
  width: 100%;

  &::after {
    animation: ${props => (props.loading ? linearLoading : '')} 1.5s linear 1.5s
      infinite;
    background-color: ${props => props.theme.primaryLight};
    content: '';
    display: inline-block;
    height: 100%;
    position: absolute;
    right: 0;
    width: 0;
  }
`;

const LinearLoader = ({ loading }) => <LoadingContainer loading={loading} />;

export default LinearLoader;
