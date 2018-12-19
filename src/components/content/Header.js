import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  header: {
    position: 'relative',
    padding: '10% 0% 25% 0%',
    textAlign: 'center',
    backgroundImage: `linear-gradient(${theme.palette.primary.main}, ${
      theme.palette.secondary.main
    })`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'contain',
    '& svg': {
      position: 'absolute',
      bottom: '0',
      width: '100%',
      height: '10vw',
      border: '1px solid black'
      /* set height to pixels if you want angle to change with screen width */
    }
  }
});

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <header>
          <Grid container className={classes.header}>
            <Grid item xs={12}>
              <h1>Header</h1>
            </Grid>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon fill="white" points="0,10 0,200, 75,100" />
              <polygon fill="white" points="0,100 100,0 100,100" />
            </svg>
          </Grid>
        </header>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Header);
