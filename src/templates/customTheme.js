import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';




const theme = createMuiTheme()
theme.typography.h4 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

export const CustomTheme = (props) => (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
