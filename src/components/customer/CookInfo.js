import React from 'react';
import axios from 'axios';

import CookHeader 	from './CookHeader';
import CookDetails 	from './CookDetails';
import GenericHeader	from './GenericHeader';

const CookInfo = React.createClass({
	getInitialState: function(){
		return {
			cook: null
		};
	},

	componentWillMount: function() {
		axios.get(`/fooditems/${this.props.params.cookid}`).then((response) => {
			this.setState({cook: response.data });
		}).catch((err) => { console.log(err) });
	},

	render: function() {
		let details = "";
		let header = "";

		if (this.state.cook) {
			details = <CookDetails foodItems={this.state.cook.fooditems}/>;
			header = <CookHeader cook={this.state.cook}/>;
		} else {
			header = <GenericHeader/>;
			details = <h1>Sorry No items were found. </h1>;
		}

		return (
			<div>
				{ header }
				{ details }
	    </div>
		)
	}
});

export default CookInfo;
