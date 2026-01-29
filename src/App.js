import React from 'react';
import { Grid } from '@material-ui/core';

import Main from './components/Main/Main';
import Details from './components/Details/Details';

const App = () => {
  return (
    <Grid container spacing={3} justify="center" style={{ marginTop: '40px' }}>
      <Grid item xs={12} sm={4}>
        <Details title="Income" />
      </Grid>

      <Grid item xs={12} sm={3}>
        <Main />
      </Grid>

      <Grid item xs={12} sm={4}>
        <Details title="Expense" />
      </Grid>
    </Grid>
  );
};

export default App;
