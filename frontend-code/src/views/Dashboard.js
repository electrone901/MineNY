import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import UserConsent from './UserConsent';
import SocialMedia from './SocialMedia';
import Stats from './Stats';
import CpuResources from './CpuResources';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state={
      userInfo: ''
    }   
  }

  componentWillMount () {
    const script = document.createElement("script");

    script.src = "https://authedmine.com/lib/simple-ui.min.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col xs={12} md={12} lg={12} style={{ padding: '0' }}>
            <UserConsent />
          </Col>
        </Row>
        <Row style={{ marginBottom: '100px' }}>
          <Col xs={7} md={7} lg={7}>
            <h2 style={{ paddingBottom: '15', paddingLeft: '20', fontFamily: 'Futura' }}>Start Mining</h2>
            <div className="coinhive-miner" style={{ height: '500px', paddingLeft: '20' }} data-key='ZM4gjqQ0jh0jbZ3tZDByOXAjyotDbo00' data-autostart='true' data-whitelabel='false' 
               data-background='#000' data-text='#eeeeee' data-action='#00ff00' data-graph='#555555' data-threads='4' data-throttle='0.1'>
              <em>Loading\...</em>
            </div>
          </Col>
          <Col xs={5} md={5} lg={5}>
            <SocialMedia />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={12} style={{ padding: '0' }}>
            <CpuResources />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={12} style={{ padding: '0' }}>
            <Stats />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Dashboard;
