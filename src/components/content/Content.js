import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import Section from './Section';
import Projects from './projects/Projects';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  content: {
    padding: '2.5% 7.5%',
    '& hr': {
      border: '1px solid black'
    }
  },
  sectionTitle: {
    fontFamily: 'Cabin, sans-serif',
    color: theme.palette.common.black,
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
            id="about"
          >
            About
          </Typography>
        </Grid>
        <Divider />
        <Grid item xs={12} lg={8}>
          <Section alignment={'left'} />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            gutterBottom
            className={classes.sectionTitle}
            id="projects"
          >
            Projects
          </Typography>
        </Grid>
        <Divider />
        <Grid item xs={12} lg={8}>
          <Projects />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            gutterBottom
            className={classes.sectionTitle}
            id="contact"
          >
            Contact
          </Typography>
        </Grid>
        <Divider />
        <Grid item xs={12} lg={8}>
          <Section alignment={'left'} />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Content);
