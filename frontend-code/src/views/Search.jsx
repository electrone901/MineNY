import React, { Component } from 'react';
import {Link} from 'react-router'

export default class Search extends Component {

  constructor(props){
    super(props);
    this.state={
      inputSearch:'',
      searchResult:[],
    }
    this.submitSearch = this.submitSearch.bind(this); 
  }



  handleChange(inputField, e){
    this.setState({[inputField] : e.target.value})
  }

  submitSearch(e) {
    e.preventDefault()
    e.preventDefault()
    let college = this.state.inputSearch;
    fetch('http://localhost:8000/api/colleges/search/' + college, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log('Response: ',response)
        return response.json();
    })
    .then((data) => {
      let result = data;
      console.log('Request succeeded with JSON response', result);
      this.setState({searchResult: result})
    })
    .catch(function (error) {
      console.log('Request failed', error);
    });
  }


  render() {
    return (
      <div>
        <center>
          <form>
            <div className="form-group">
              <label></label><br/>
              <input style={searchBar} type="inputSearch" onChange={this.handleChange.bind(this, 'inputSearch')} placeholder=' Quick Search' required="required"  autoFocus />
            </div>

            <div className="form-group">
              <button type="submit" onClick={this.submitSearch} className="btn btn-success">Search</button>
            </div>
          </form>

          <div className='container'>
            {this.state.searchResult.map((ele,i)=>{
            return <table key={i} className="table table-bordered table-responsive table-hover">
              <tbody>
                  <tr>
                    <td>Id: {ele.id}</td>
                    <td>Name: {ele.name}</td>
                    <td>Address: {ele.address}</td>
                    <td>Web: {ele.website}</td>

                    <td><Link to={'/update-info/' + ele.id}><button className="btn btn-success">Update</button></Link></td>

                    <td><Link to={'/delete-user/' + ele.id}><button className="btn btn-danger">Delete</button></Link></td>
                  </tr>
                </tbody> 
            </table>
            })}
          </div>
          <div className="container"></div>
        </center>
      </div>

    );
  }
}

var tableData = {
  width: "250px",
  height: "20px",
  padding: "10px",
}

var searchBar = {
  width: "250px",
  fontFamily: "neutra-book",
  width: "325px",
  marginBottom: "3px",
  borderRadius: "32px",
  paddingLeft: "15px",
  outline: "0",
  height: "48px",
  fontWeight: "600",
  fontSize: "25px",
  transition: "all 250ms ease-out",
}
