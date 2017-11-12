import React, { Component } from 'react';

class SocialMedia extends Component {
  constructor(props){
    super(props);
    this.state={}   
  }

  render() {
    return (
      <div className="jumbotron" style={{borderRadius: '0', backgroundColor: '#f7f7f7', marginTop: '27', marginBottom: '0'}}>
        <h1 className="display-3" style={styles.header}>Social</h1>
      </div>
    );
  }
}

const styles = {
  header: {
    fontSize: 25,
    fontFamily: 'Futura'
  },

  paragraph: {
    fontSize: 15
  },

  button: {
    fontSize: 15
  }
}

export default SocialMedia;
