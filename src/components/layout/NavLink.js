import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  navLink: {
    fontFamily: 'Cabin, sans- serif',
    padding: '5%',
    textAlign: 'center',
    '& a': {
      borderBottom: '1px solid white',
      color: 'white',
      padding: '0 7.5% 2% 7.5%',
      textDecoration: 'none',
      textTransform: 'uppercase'
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
