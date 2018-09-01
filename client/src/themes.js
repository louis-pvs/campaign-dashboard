import { toRem } from './utils';
const commonVars = {
  baseSize: '16px',
  text: '#212121',
  headerHeight: toRem(50)
};

export const defaultTheme = {
  primary: '#4a148c',
  primaryLight: '#7c43bd',
  primaryDark: '#12005e',
  secondary: '#fbc02d',
  secondaryLight: '#fff263',
  secondaryDark: '#c49000',
  textOnPrimary: '#f3e5f5',
  textOnSecondary: '#3e2723',
  ...commonVars
};

export const alternateTheme = {
  primary: '#ffb300',
  primaryLight: '#ffe54c',
  primaryDark: '#c68400',
  secondary: '#1565c0',
  secondaryLight: '#5e92f3',
  secondaryDark: '#003c8f',
  textOnPrimary: '#3e2723',
  textOnSecondary: '#eceff1',
  ...commonVars
};
