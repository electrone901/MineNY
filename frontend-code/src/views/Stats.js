import React, { Component } from 'react';
import {Grid, Row, Col, Table, thead, tbody, tr, td, th} from 'react-bootstrap';

class Stats extends Component {
  constructor(props){
    super(props);
    this.state={}   
  }

  componentWillMount() {
    const s = document.createElement('script');
    s.src = "https://authedmine.com/lib/simple-ui.min.js";
    s.async = true;

    document.body.appendChild(s);
  }

  render() {
    return (
      <div className="jumbotron" style={{borderRadius: '0', backgroundColor: '#fff'}}>
        <h1 className="display-3" style={styles.header}>Statistics</h1>
        <Grid fluid={true}>
          <Row>
            <Col xs={12} md={12} lg={12} style={{ padding: '0'}}>
              <Table condensed hover>
                <thead>
                  <tr>
                    <th style={{ fontSize: 20, fontFamily: 'Futura' }}>XMR</th>
                    <th style={{ fontSize: 20, fontFamily: 'Futura' }}>USD</th>
                    <th style={{ fontSize: 20, fontFamily: 'Futura' }}>Hash Rate Per Second</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontSize: 20 }}>1</td>
                    <td style={{ fontSize: 20 }}>$118.64</td>
                    <td style={{ fontSize: 20 }}>58.2</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={7} style={{ padding: '0' }}>
              <div
                className="coinmarketcap-currency-widget"
                data-currency="monero"
                data-base="USD"
                data-secondary="BTC"
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
const styles = {
  header: {
    fontSize: 45,
    fontFamily: 'Futura',
    paddingBottom: 60
  },

  image: {
    width: 60,
    height: 60
  },

  stat: {
    borderRadius: 6,    
    fontFamily: 'Futura',
    paddingBottom: 60,
    paddingTop: 40
  },

  currencyWidget: {
    paddingTop: 40
  }
}

export default Stats;
