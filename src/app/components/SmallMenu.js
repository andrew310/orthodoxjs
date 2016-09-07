// app/components/SmallMenu.js
'use strict';
import React from 'react';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import {observer} from 'mobx-react';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

@observer(["AuthStore", "ProfileStore"])
class SmallMenu extends React.Component {

  constructor(props) {
    super(props);
    this.auth = this.props.AuthStore;
    this.profile = this.props.ProfileStore;
    this.handleSignout = this.handleSignout.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  handleSignout() {
    this.auth.signout();
  }

  /**
   * Displays different menu according to whether user is logged in.
   */

  getUser() {
    if (this.auth.IS_LOGGED_IN) {
      return (
        <div>
        <Subheader> {this.profile.PROFILE.username} </Subheader>
        <Divider />
        <MenuItem primaryText="Profile" />
        <MenuItem primaryText="Sign out" onClick={this.handleSignout}/>
        </div>
      );
    } else {
      return (
        <div>
        <MenuItem primaryText="Sign In" />
        <MenuItem primaryText="Sign Up" />
        </div>
      );
    }
  }

  render(){
    const getUser = this.getUser();
    return(
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
        {getUser}
      </IconMenu>
    );
  }
}

export default SmallMenu;
