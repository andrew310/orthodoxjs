// import stuff
import React from 'react';
import Avatar from 'material-ui/Avatar';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const Item = (props) => {
  <li style={{maxWidth: 450}}>
  <Card zDepth={1}>
    <CardHeader
      title={props.name}
      subtitle={props.body}
    />
  </Card>
  </li>
}


module.exports = Item;
