import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Section from './Section';

const styles = theme => ({
  content: {
    padding: '2.5% 7.5%'
  }
});

class Content extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.content}>
        <Grid item xs={12} lg={6}>
          <Section />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Section />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Section />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Section />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Section />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Section />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Section />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Section />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Section />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Section />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Section />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Section />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Section />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Section />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Section />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Section />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Content);
