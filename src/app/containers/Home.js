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
        <List style={{display : 'inline-block', minWidth: '70%'}}>
        <ListItem
          primaryText="15 React Tutorials"
          secondaryText="created by Brad"
          leftIcon={ <div style={{display: 'block', margin: 'auto', left: 15}} ><Up color={redA100} /><Down color={redA100}/></div>}
          rightAvatar={<Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/marcogomes/128.jpg" />}
        />
        <ListItem
          primaryText="Flux Systems"
          secondaryText="created by Jenny"
          insetChildren={true}
          leftIcon={ <div style={{display: 'block', margin: 'auto', left: 15}} ><Up color={redA100} /><Down color={redA100}/></div>}
          rightAvatar={<Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/esthercrawford/128.jpg" />}
        />
        <ListItem
          primaryText="Reasons why React is better than..."
          secondaryText="created by Ralph"
          insetChildren={true}
          leftIcon={ <div style={{display: 'block', margin: 'auto', left: 15}} ><Up color={redA100} /><Down color={redA100}/></div>}
          rightAvatar={<Avatar src="http://uifaces.com/jsa" />}
        />
        <ListItem
          primaryText="6 live sites using with MobX"
          secondaryText="created by mrTweedums1771"
          insetChildren={true}
          leftIcon={ <div style={{display: 'block', margin: 'auto', left: 15}} ><Up color={redA100} /><Down color={redA100}/></div>}
          rightAvatar={<Avatar src="http://uifaces.com/jsa" />}
        />
        </List>
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
