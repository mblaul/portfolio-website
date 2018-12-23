import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import Section from './Section';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  content: {
    padding: '2.5% 7.5%'
  },
  sectionTitle: {
    mx: '0px auto',
    padding: '1% 0%',
    textAlign: 'center'
  }
});

class Content extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.content} spacing={8}>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            gutterBottom
            className={classes.sectionTitle}
          >
            About
          </Typography>
        </Grid>
        <Divider />
        <Grid item xs={12} lg={8}>
          <Section />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            gutterBottom
            className={classes.sectionTitle}
          >
            Projects
          </Typography>
        </Grid>
        <Divider variant="middle" />
        <Grid item xs={12} lg={8}>
          <Section />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            gutterBottom
            className={classes.sectionTitle}
          >
            Contact
          </Typography>
        </Grid>
        <Divider variant="middle" />
        <Grid item xs={12} lg={8}>
          <Section />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Content);
