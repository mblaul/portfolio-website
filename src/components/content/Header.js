import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  header: {
    padding: '10% 0% 25% 0%',
    textAlign: 'center',
    backgroundColor: '#2d898b',
    backgroundAttachment: 'fixed',
    backgroundSize: 'contain'
  }
});

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.header}>
        <Grid item xs={12}>
          Header
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Header);
