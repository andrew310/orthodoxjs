import React from 'react';
import SideBar from '../components/SideBar';
import Item from '../components/Item';
import {observer} from 'mobx-react';
import Avatar from 'material-ui/Avatar';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

@observer(["Items"])
class Home extends React.Component {
  constructor(props){
    super(props);
    this.renderItems = this.renderItems.bind(this);
    this.store = this.props.Items;
  }

  componentDidMount() {
    // turn this off while working on other stuff
    this.store.getItems();
  }

  renderItems() {
    if (this.store.items_fetched) {
      return (this.store.items.map( (comment) => {
        return (
          <li style={{maxWidth: 450}}>
          <Card zDepth={1}>
            <CardHeader
              title={comment.name}
              subtitle={comment.body}
            />
          </Card>
          </li>
        );
      }));
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
            <ul style={{listStyleType: 'none'}}>
            {renderThis}
            </ul>
          </div>
        </div>
    );
  }
};


export default Home;
