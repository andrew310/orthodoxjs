import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import {observer} from 'mobx-react';

@observer(["AuthStore"])
export default class SnackbarExampleSimple extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.AuthStore;
  }
  render() {
    return (
        <Snackbar
          open={this.store.IS_FETCHING_LOGIN}
          autoHideDuration={10000}
          message={<center><CircularProgress size = {.5} /></center>}
        />
    );
  }
}
