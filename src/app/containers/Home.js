import React from 'react';
import Avatar from 'material-ui/Avatar';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import SideBar from '../components/SideBar';


const Home = () => {
    return (
        <div >

          <SideBar style={{position: 'absolute', top: '20px'}}/>

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
          </div>

        </div>
    );
};


export default Home;
