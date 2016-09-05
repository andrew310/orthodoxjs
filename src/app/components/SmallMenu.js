// app/components/SmallMenu.js
'use strict';
import React from 'react';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import {observer} from 'mobx-react';


@observer(["AuthStore"])
class SmallMenu extends React.Component {

  constructor(props) {
    super(props);
    this.auth = this.props.AuthStore;
    this.handleSignout = this.handleSignout.bind(this);
  }

  handleSignout() {
    this.auth.signout();
  }

  render(){
    return(
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" onClick={this.handleSignout}/>
      </IconMenu>
    );
  }
}

export default SmallMenu;
