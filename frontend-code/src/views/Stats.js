import React, { Component } from 'react';

class Stats extends Component {
  constructor(props){
    super(props);
    this.state={}   
  }

  render() {
    return (
      <div className="jumbotron" style={{borderRadius: '0', backgroundColor: '#f7f7f7'}}>
        <h1 className="display-3" style={styles.header}>Stats</h1>
      </div>
    );
  }
}

const styles = {
  header: {
    fontSize: 25,
    fontFamily: 'Futura'
  }
}

export default Stats;
