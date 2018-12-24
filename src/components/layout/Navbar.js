import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import NavLink from './NavLink';

const styles = theme => ({
  navbar: {
    position: 'fixed',
    top: '0',
    width: '100%',
    padding: '0.5% 20% 1% 20%',
    backgroundColor: 'rgba(#000, .5)',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
    zIndex: '1',
    transition: 'background-color .2s ease, box-shadow .2s ease'
  },
  scrolled: {
    backgroundColor: theme.palette.common.white,
    boxShadow: `0px -10px 25px 1px rgba(0,0,0,0.75)`
  }
});

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isTop: true
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 570;
      if (isTop) {
        this.setState({ isTop: true });
      } else {
        this.setState({ isTop: false });
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener('scroll');
  }

  render() {
    const navLinks = ['about', 'projects', 'contact'];
    const { classes } = this.props;
    const { isTop } = this.state;

    return (
      <Grid
        container
        className={`${!isTop && classes.scrolled} ${classes.navbar}`}
      >
        <div className={classes.branding}>{'<mb />'}</div>
        {navLinks.map(link => {
          return (
            <Grid item xs={12} sm={3}>
              <NavLink isTop={isTop} link={link} name={link} />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

export default withStyles(styles)(Navbar);
