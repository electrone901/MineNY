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

  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col xs={12} md={12} lg={12} style={{ padding: '0' }}>
            <UserConsent />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={12} style={{ padding: '0' }}>
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
