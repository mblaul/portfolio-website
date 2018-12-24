import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  sectionHeader: {
    fontFamily: 'Cabin, sans-serif',
    padding: '0% 2.5%'
  },
  sectionBody: {
    fontFamily: 'Open Sans',
    lineHeight: 1.75,
    padding: '1% 0% 1% 0%'
  }
});

class Section extends Component {
  render() {
    const { alignment, classes } = this.props;

    return (
      <>
        <Typography variant="h3">Header</Typography>
        <div className={classes.sectionBody}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </div>
      </>
    );
  }
}

export default withStyles(styles)(Section);
