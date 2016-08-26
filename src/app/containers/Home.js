import React from 'react';
import Avatar from 'material-ui/Avatar';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import SideBar from '../components/SideBar';


const Home = () => {
    return (
        <div >

          <SideBar style={{position: 'absolute', top: 20}}/>

          <div>
            <ul style={{listStyleType: 'none'}}>
              <li style={{maxWidth: 450}}>
              <Card zDepth={0}>
                <CardHeader
                  title="Express"
                  subtitle="using express for server"
                />
              </Card>
              </li>
              <li style={{maxWidth: 450}}>
              <Card zDepth={0}>
                <CardHeader
                  title="React"
                  subtitle="React components on front end"
                />
              </Card>
              </li>
              <li style={{maxWidth: 450}}>
              <Card zDepth={0}>
                <CardHeader
                  title="Mobx"
                  subtitle="State management with Mobx"
                />
              </Card>
              </li>
            </ul>
          </div>

        </div>
    );
};


export default Home;
