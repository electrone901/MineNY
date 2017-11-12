import React, { Component } from 'react';
import {Link} from 'react-router';
import {Button} from 'react-bootstrap';

export class UserConsent extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="App" style={styles.div}>
        <div className="jumbotron" style={{borderRadius: '0', marginBottom: '0', backgroundColor: '#fff'}}>
          <h1 className="display-3" style={styles.header}>mineNYC</h1>
          <p className="lead" style={styles.leadText}>Fundraise With Digital Currency</p>
          <hr style={styles.hr} />
          <p style={styles.text}>The Mine New York Iniative can leverage User CPU processing to mine alternative cryptocurrency. All proceeds will go to a charity of your choice.</p>
          <Button bsStyle="danger" block style={{ fontSize: '12' }}>{'Lets Mine'.toUpperCase()}</Button>
        </div>
      </div>
    );
  }
}

const styles = {
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'Futura'
  },

  leadText: {
    fontSize: 14,
    fontFamily: 'Futura'
  },

  hr: {
    height: 12, 
    border: 0,  
    boxShadow: 'inset 0 12px 12px -12px rgba(0, 0, 0, 0.5)',
    paddingBottom: 5
  },

  text: {
    fontSize: 12,
    marginBottom: 25,
    fontStyle: 'italic'
  }
}

export default UserConsent;
