import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';

export default class SocialMedia extends Component {
  constructor() {
    super();
    this.state = { 
      show: false,
      name: '',
      url: '',
      inputObject: {},
      links: [
        {name: "Nexflix", url:"https://www.netflix.com/"},
        {name: "Twitter", url:"https://twitter.com"},
        {name: "Reddit", url:"https://www.reddit.com"},
        {name: "NYTimes", url:"https://www.nytimes.com/"},
      ],
    }
    this.handleClick = this.handleClick.bind(this); 
    this.handleChange = this.handleChange.bind(this); 
    this.addLink = this.addLink.bind(this); 
  }

  handleClick() {
    this.setState({
      show: !this.state.show,
    });
  }

  handleChange(inputField, e){
    this.setState({[inputField] : e.target.value})
  }

  addLink(e) {
    e.preventDefault();
    let inputObject = {name: this.state.name, url: this.state.url}
    console.log('inputObject: ', inputObject)
    this.setState({ 
      links: this.state.links.concat([inputObject])
    })
    this.refs.name.value = '';
    this.refs.url.value = '';
  }

  render() {
    return (
      <div>
        <h2 style={{ paddingBottom: '15', fontFamily: 'Futura' }}>Your Links </h2>
        {
          (this.state.links) ? 
          (<table className="table table-bordered table-responsive table-hover">
            <tbody> 
              {this.state.links.map((link, key) => {
                return(
                  <tr key={key}>
                    <td colSpan="1"><a href={link.url} target="_blank" style={{ fontSize:'20px' }}><span className="glyphicon glyphicon-folder-open" style={{ fontSize:'20px', padding: '25'}}></span>{link.name} </a>
                    </td>
                  </tr>) 
                })
              }
            </tbody> 
          </table>): 
          (<h1>Loading ...</h1>)
        }

        <p className="App-intro">
          <button onClick={ () => this.handleClick() } style={{ paddingLeft: '40', paddingRight: '40', borderRadius: '6', fontFamily: 'Futura'}}>+</button>
        </p>

        <ToggleDisplay show={this.state.show}>
           <center>
             <form className="form-inline justify-content-center">
                <div className="form-group">
                  <label>Link name</label><br/>
                  <input type="name" ref="name" onChange={this.handleChange.bind(this, 'name')}  className="form-control" placeholder=' Link name' required="required"  autoFocus />
                </div><br/>

                <div className="form-group">
                  <label>Link Url</label><br/>
                  <input type="url" ref="url" onChange={this.handleChange.bind(this, 'url')}  className="form-control" placeholder=' url' />
                </div><br/><br/>

                <div className="form-group">
                  <button type="submit" onClick={this.addLink} className="btn btn-success" >Save</button>
                </div>
              </form>
            </center>
        </ToggleDisplay>

        <ToggleDisplay if={this.state.show} tag="section">
        </ToggleDisplay> <br/><br/><br/>
        
      </div>
    );
  }
}