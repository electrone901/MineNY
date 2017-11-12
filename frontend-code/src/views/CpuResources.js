import React, { Component } from 'react';

export default class CpuResources extends Component {
  constructor() {
    super();
    this.state = { 
      selectValue:[],
    }
    this.handleClick = this.handleClick.bind(this); 
    this.handleChange = this.handleChange.bind(this); 
    this.confirmation = this.confirmation.bind(this); 
  }

  handleClick() {
    this.setState({
      show: !this.state.show,
    });
  }

  handleChange(inputField, e){
    this.setState({[inputField] : e.target.value})
  }

  confirmation(e) {
    e.preventDefault();
    console.log('Thank you your info was send')
  }


  increaseLength() {
    var currentLength = document.getElementById("myProgress").value;
    if (currentLength < 90) {
      currentLength += 10;
      document.getElementById("myProgress").value = currentLength;
    } else if ((currentLength > 90 && currentLength < 100)) {
      currentLength == 100;
      document.getElementById("myProgress").value = currentLength;
    } else {
      alert("You reached the maximum length of the progressbar!")
    }
  }

  decreaseLength() {
    var currentLength = document.getElementById("myProgress").value;
    if (currentLength > 10) {
      currentLength -= 10;
      document.getElementById("myProgress").value = currentLength;
    } else if (currentLength > 0 && currentLength < 10) {
      currentLength == 0;
      document.getElementById("myProgress").value == currentLength;
    } else {
      alert("You have reached the maximum CPU threshold!")
    }
  }

  
  
  render() {
    return (
      <div className="container">
        <center>
          <p className="lead" style={{fontSize: '32', fontFamily: 'Futura'}}> Monetize Your Charity With Your CPU Power </p>
        </center><br/><br/>

        <div class="container">
          <div class="jumbotron">
            <div style={{ height: '80', width: '90%', borderRadius: '6', backgroundColor: '#fff', paddingTop: '25', marginBottom: '40' }}>
              <button className="btn btn-danger"  onClick={ () => this.decreaseLength() } style={{ marginLeft: '15px', marginBottom: '15' }}> - </button>
              <progress id="myProgress"  value="0" max="100" style={{ backgroundColor: 'white', width:'90%', height:'25px', paddingLeft: '30px', paddingRight: '30px'}}></progress>
              <button className="btn btn-success" onClick={ () => this.increaseLength() } style={{ marginRight: '12px', marginBottom: '15' }}> + </button><br/><br/><br/>
            </div>
          </div>
        </div>

        <h1 style={{ fontSize: '30', paddingBottom: '10', fontFamily: 'Futura' }}>Mining For: </h1>
        <div className="align-middle">
          <form className="align-middler">
            <input type="radio" name="fruit" value="Hands" /> <a href={"https://www.hands.org/projects/usvi-hurricane-response/"} target="_blank" style={{fontSize:'25px', paddingLeft:'20px', color: '#2F71AA', fontWeight: 'bold' }}>  All Hands Volunteers</a><br/>
            <input type="radio" name="fruit" value="Hands" /> <a href={"https://www.gofundme.com/raise-funds/hurricanemaria"} target="_blank" style={{fontSize:'25px', paddingLeft:'20px', color: '#2F71AA', fontWeight: 'bold' }}> GoFundMe </a><br/>
            <input type="radio" name="fruit" value="Hands" /> <a href={"https://support.crs.org/donate/hurricane-irma-relief"} target="_blank" style={{fontSize:'25px', paddingLeft:'20px', color: '#2F71AA', fontWeight: 'bold' }}> Catholic Relief Services</a><br/>
            <input type="radio" name="fruit" value="Hands" /> <a href={"http://www.unidosporpuertorico.com/en/"} target="_blank" style={{fontSize:'25px', paddingLeft:'20px', color: '#2F71AA', fontWeight: 'bold' }}> United For Puerto Rico</a><br/>
            <input type="radio" name="fruit" value="Hands" /> <a href={"https://www.robinhood.org"} target="_blank" style={{fontSize:'25px', paddingLeft:'20px', color: '#2F71AA', fontWeight: 'bold' }}> Robin Hood Foundation</a><br/>
            <input type="radio" name="fruit" value="Hands" /> <a href={"https://www.citymeals.org/"} target="_blank" style={{fontSize:'25px', paddingLeft:'20px', color: '#2F71AA', fontWeight: 'bold' }}> CityMeals-on-Wheels </a><br/><br/><br/>
          </form>

          <center><button type="button" className="btn btn-primary btn-lg" data-toggle="modal"data-target="#myModal" style={{ paddingTop: '15', paddingBottom: '15', paddingLeft: '40', paddingRight: '40' }}>Monetize Now</button></center><br/><br/>
        </div>

        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                <h4 className="modal-title" id="myModalLabel">Confirmation</h4>
              </div>
              <div className="modal-body">
                Thank you for you help!
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success" data-dismiss="modal">Close</button>
               {/*<button type="button" className="btn btn-primary">Save changes</button>*/}
              </div>
            </div>
          </div>
        </div>

        
      </div>
    );
  }
}