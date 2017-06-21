import React from 'react';
import axios from 'axios';

import CookHeader 			from '../cook/CookHeader';
import CustomerFilterPage 	from './CustomerFilterPage';
import CustomerFilterHeader 	from './CustomerFilterHeader';

const CustomerDash = React.createClass({
	getInitialState: function(){
		return {
			location: null,
			cuisine: null,
			items: [],
		};
	},

	formHandler: function(query) {
		const location = (query.location === "") ? null : query.location
		const cuisine = (query.cuisine === "") ? null : query.cuisine
		this.setState({
			location: location,
			cuisine: cuisine
		})
	},

	render: function(){

		return(
			<div>
				<CustomerFilterHeader formHandler={(query) => this.formHandler(query)}/>
				<CustomerFilterPage	location={this.state.location}	cuisine={this.state.cuisine}/>
			</div>
		);
	}
});

export default CustomerDash;
