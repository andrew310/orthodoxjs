// src/app/components/SideBar.js
'use strict';
import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import SvgIcon from 'material-ui/SvgIcon';
import SearchIcon from 'material-ui/svg-icons/action/search';
import Badge from 'material-ui/Badge';
import {redA100, transparent} from 'material-ui/styles/colors';
import Up from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import Down from 'material-ui/svg-icons/hardware/keyboard-arrow-down';

const SideBar = () => {
  return(
    <div>
      <Card style={{display : 'inline-block', float : 'right', minWidth: 300}}>

        <CardHeader title='Search'>
          <br />
          <SearchIcon style={{float: 'right', paddingTop: 15}}/>
          <TextField style={{float: 'left'}}
          id="text-field-controlled"
          />
        </CardHeader>

        <br />

        <CardHeader title='+ Create New '>
        </CardHeader>

        <CardHeader title='+ Another Action'>
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

module.exports = SideBar;
