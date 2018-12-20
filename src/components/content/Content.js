import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Section from './Section';

const styles = theme => ({
  content: {
    padding: '2.5% 7.5%'
  }
});

class Content extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.content}>
        <Section />
        <Section />
        <Section />
        <Section />
      </div>
    );
  }
}

export default withStyles(styles)(Content);
