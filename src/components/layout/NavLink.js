import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  navLink: {
    '& a': {
      color: 'white'
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
