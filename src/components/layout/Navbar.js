import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  navbar: {
    position: 'fixed',
    top: '0',
    width: '100%',
    padding: '2% 20%',
    backgroundColor: 'rgba(#000, .5)',
    textAlign: 'center'
  }
});

class Navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.navbar}>
        <Grid item xs={12} sm={3}>
          Hello
        </Grid>
        <Grid item xs={12} sm={3}>
          Hello
        </Grid>
        <Grid item xs={12} sm={3}>
          Hello
        </Grid>
        <Grid item xs={12} sm={3}>
          Hello
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Navbar);
