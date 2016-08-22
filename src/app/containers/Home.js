import React from 'react';
import {redA100, transparent} from 'material-ui/styles/colors';
import Up from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import Down from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import Avatar from 'material-ui/Avatar';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import SvgIcon from 'material-ui/SvgIcon';
import SearchIcon from 'material-ui/svg-icons/action/search';
import Badge from 'material-ui/Badge';


const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
  voting: {
      paddingBottom: 5
  }
};


const Home = () => {
    return (
        <div>
          <ul style={{"list-style-type":"none"}}>
            <li style={{maxWidth: "450"}}>
            <Card zDepth={0}>
              <CardHeader
                title="Without Avatar"
                subtitle="Subtitle"
              />
            </Card>
            </li>
            <li style={{maxWidth: "450"}}>
            <Card zDepth={0}>
              <CardHeader
                title="Without Avatar"
                subtitle="Subtitle"
              />
            </Card>
            </li>
          </ul>
        <Card style={{display : 'inline-block', float : 'right', minWidth: 300}}>
            <CardHeader title='Search'>
                <br />
                <SearchIcon style={{float: 'right', paddingTop: 15}}/>
                <TextField style={{float: 'left'}}
                  id="text-field-controlled"
                />
            </CardHeader>
                <br />
            <CardHeader title='+ Create New Crumbtrail'>
            </CardHeader>
            <CardHeader title='+ New Crumb'>
            </CardHeader>
            <CardHeader title='Profile'>
            <Badge
              badgeContent={4}
              primary={true}
            >
            </Badge>
            </CardHeader>
            <CardHeader title='Recent'>
            </CardHeader>
        </Card>
        </div>
    );
};


export default Home;
