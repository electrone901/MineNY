// FIRST GET ALL BOOKS
// THEN ONCLICK GET A SINGLE BOOK 
// FROM HERE

import React, { Component } from 'react';
import {Link} from 'react-router';

class SellersBookDetail extends Component {
	constructor(props) {
		super(props)
		this.state = {
			bookId: props.routeParams.id,
      		bookInfo: '',
			postInfo: '',
		}
	}

	componentWillMount() {
		let bookId = this.state.bookId
		fetch('http://localhost:8000/api/books/' + bookId, {
		  method: 'get',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		  },
		})
		.then((response) => {
		  console.log('Response book: ',response)
		    return response.json();
		})
		.then((data) => {
		  let result = data;
		  console.log('bookInfo Request succeeded with JSON response', result);
		  this.setState({bookInfo: result})

		  fetch('http://localhost:8000/api/post/' + data.title, {
			method: 'get',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		  })
		  .then((response) => {
		  	console.log('Response book: ',response)
			return response.json();
		  })
		  .then((data) => {
		  	let result = data;
		  	console.log('postInfo Request succeeded with JSON response', result);
		  	this.setState({postInfo: result})
		  })
		})
		.catch(function (error) {
		  console.log('Request failed', error);
		})
	}


	render() {
		return (
			<div className="container">
				<h1 style={{color:'blue', fontSize: '30px'}}>
		          Book Details  
		        </h1>

		        { (this.state.bookInfo) ? 
                  (
                  	<div>
                  		<div>
                  			<img src={'https://images-na.ssl-images-amazon.com/images/I/51OPx5KCYqL._SX332_BO1,204,203,200_.jpg'} alt="book cover of the universe"/>
                  		</div>
                  		<div>
	                  		<h1>Title: {this.state.bookInfo.title}</h1>
	                  		<h1>Author: {this.state.bookInfo.author}</h1>
							<h1>Edition: {this.state.bookInfo.edition}</h1>
							<h1>Format: {this.state.bookInfo.format}</h1>
							<h1>Year: {this.state.bookInfo.year}</h1>
						</div>

						{ (this.state.postInfo) ? 
		                  (<table className="table table-bordered table-responsive table-hover">
		                  	<thead >
		                  	<tr>
		                  		<th> Seller </th>
					            <th> Price </th>
					            <th> Book Conditions  </th>
					            <th>  Buy Now </th>
					        </tr>
					        </thead>
					        <tbody> 
					        {this.state.postInfo.map((book, key) => {
		                    return(
		                      <tr key={key}>
					            <td colSpan="1">{book.author}</td>
					            <td scope="row"> $ {book.price}</td>
					            <td scope="row">{book.condition}</td>
					            <td scope="row"><button type="button" className="btn btn-success">Buy Now</button></td>
					          </tr>

		                    ) 
		                  })
					    }
					    </tbody> 
					    </table>

					    ) : <h1>Loading ...</h1>
		                }
		                

                  	</div>
                    ) 
                   : <h1>Loading ...</h1>
                }
		    </div>
		)
	}



}
export default SellersBookDetail;