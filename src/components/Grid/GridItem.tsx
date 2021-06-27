import { Grid } from '@material-ui/core';
import React from 'react';

const GridItem = ({children, ...rest}: any) => (
  <Grid item {...rest}>
    {children}
  </Grid>
)

export default GridItem;
