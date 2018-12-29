import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

class Project extends Component {
  render() {
    const { body, header, image } = this.props;

    return (
      <Card>
        {header}
        <CardContent>{body}</CardContent>
      </Card>
    );
  }
}

export default Project;
