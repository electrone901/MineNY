import React, { Component } from 'react';

export class UserConsent extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="App" style={styles.div}>
        <div className="jumbotron" style={{borderRadius: '0', marginBottom: '0', backgroundColor: '#fff'}}>
          <h1 className="display-3" style={styles.header}>iMineForNYC</h1>
          <p className="lead" style={styles.leadText}>Fundraise With USD & Digital Currency</p>
          <hr style={styles.hr} />
          <p style={styles.text}>The Mine New York Iniative can leverage User CPU processing to mine Alternative Cryptocurrencies. Monero (XMR) is currently supported. Revenue will go to a charity of your pick.</p>
        </div>
      </div>
    );
  }
}

const styles = {
  header: {
    fontSize: 75,
    fontWeight: 'bold',
    fontFamily: 'Futura',
    paddingTop: 10
  },

  leadText: {
    fontSize: 30,
    fontFamily: 'Futura'
  },

  hr: {
    height: 12, 
    border: 0,  
    boxShadow: 'inset 0 12px 12px -12px rgba(0, 0, 0, 0.5)',
    paddingBottom: 5,
    size: 1,
    marginLeft: 500,
    marginRight: 500
  },

  text: {
    fontSize: 22,
    marginBottom: 50,
    // paddingLeft: 700,
    // paddingRight: 700
  }
}

export default UserConsent;
