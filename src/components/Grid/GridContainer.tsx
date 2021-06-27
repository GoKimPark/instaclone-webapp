import { Grid } from '@material-ui/core';
import React from 'react';

const GridContainer = ({children, ...rest}: any) => (
  <Grid container {...rest}>
    {children}
  </Grid>
);

export default GridContainer;
