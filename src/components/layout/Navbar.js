import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import NavLink from './NavLink';

const styles = theme => ({
  navbar: {
    position: 'fixed',
    top: '0',
    width: '100%',
    padding: '2% 20%',
    backgroundColor: 'rgba(#000, .5)',
    zIndex: '1'
  }
});

class Navbar extends Component {
  render() {
    const navLinks = ['about', 'projects', 'contact'];
    const { classes } = this.props;
    return (
      <Grid container className={classes.navbar}>
        {navLinks.map(link => {
          return (
            <Grid item xs={12} sm={4}>
              <NavLink link={link} name={link} />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

export default withStyles(styles)(Navbar);
