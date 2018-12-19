import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  navLink: {
    fontFamily: 'Cabin, sans- serif',
    padding: '5%',
    textAlign: 'center',
    '& a': {
      borderBottom: `1px solid ${theme.palette.common.white}`,
      color: theme.palette.common.white,
      opacity: '0.6',
      padding: '0 7.5% 2% 7.5%',
      textDecoration: 'none',
      textTransform: 'uppercase',
      transition:
        'border-bottom .1s ease, color .5s ease, font-size .2s ease, opacity .1s ease',
      '&:hover': {
        borderBottom: `7px solid ${theme.palette.common.white}`,
        color: theme.palette.common.white,
        fontSize: '18px',
        opacity: '1'
      }
    }
  }
});
class NavLink extends Component {
  render() {
    const { classes, name } = this.props;

    return (
      <div className={classes.navLink}>
        <a href={`/#${name}`}>{name}</a>
      </div>
    );
  }
}

NavLink.propTypes = {
  name: PropTypes.string.isRequired
};

export default withStyles(styles)(NavLink);
