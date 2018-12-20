import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({});

class Section extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Paper className={classes.root} elevation={1}>
          <h1>Section Header</h1>
          <Typography component="p">
            Some text about how awesome web design is.
          </Typography>
        </Paper>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Section);
