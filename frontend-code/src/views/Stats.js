import React, { Component } from 'react';
import {Grid, Row, Col, Table, thead, tbody, tr, td, th} from 'react-bootstrap';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import SimpleAreaChart from './SimpleAreaChart';

class Stats extends Component {
  constructor(props){
    super(props);
    this.state={}   
  }

  componentWillMount () {
    const script = document.createElement("script");

    script.src = "https://files.coinmarketcap.com/static/widget/currency.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="jumbotron" style={{borderRadius: '0', backgroundColor: '#fff'}}>
        <h1 className="display-3" style={styles.header}>Statistics</h1>
        <Grid fluid={true}>
          <Row>
            <Col xs={12} md={12} lg={7} style={{ padding: '0' }}>
              <SimpleAreaChart />
            </Col>
            <Col xs={12} md={12} lg={5} style={{ padding: '0'}}>
              <Table condensed hover>
                <thead>
                  <tr>
                    <th style={{ fontSize: 30 }}>XMR</th>
                    <th style={{ fontSize: 30 }}>USD</th>
                    <th style={{ fontSize: 30 }}>Hash Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontSize: 25 }}>1</td>
                    <td style={{ fontSize: 25 }}>$118.64</td>
                    <td style={{ fontSize: 25 }}>Value</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
        <div className="coinmarketcap-currency-widget" data-currency="monero" data-base="USD"  data-secondary="BTC" style={styles.currencyWidget}></div>
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
