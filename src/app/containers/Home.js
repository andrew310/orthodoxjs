import React from 'react';
import SideBar from '../components/SideBar';
import Item from '../components/Item';
import {observer} from 'mobx-react';

@observer(["Items"])
class Home extends React.Component {
  constructor(props){
    super(props);
    this.renderItems = this.renderItems.bind(this);
    this.store = this.props.Items;
  }

  componentDidMount() {
    this.store.getItems();
  }

  renderItems() {
    if (this.store.items_fetched) {
      return (<div>{this.store.items.name}</div>);
    } else {
      return (<div>sadface</div>);
    }
  }

  render(){
    const renderThis = this.renderItems();
    return (
        <div >
          <SideBar style={{position: 'absolute', top: 20}}/>
          <div>
            {renderThis}
          </div>
        </div>
    );
  }
};


export default Home;
