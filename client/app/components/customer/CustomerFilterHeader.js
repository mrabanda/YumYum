
const React = require("react");

const CustomerFilterHeader = React.createClass({
	getInitialState: function() {
			return {
				cuisine: '',
				location: '',
			};
	},

	handleChange: function(event){
			if (event.target.name === "CityStateZip") {
				this.setState({location: event.target.value });
			} else if ( event.target.name === "Cuisine") {
				this.setState({cuisine: event.target.value });
			}
	},

	formSubmit: function(){
		const query = { location: this.state.location, cuisine: this.state.cuisine }
		this.props.formHandler(query);
	},

	render: function(){
		return(
			<div className="header">
				<div className="headerCont">
					<h1>Search For Some Food</h1>
					<h3> Find food by cuisine or zip code </h3>
					<form className="navbar-form">
				        <div className="form-group">
									<input type="text"
												 name="Cuisine"
												 onChange={this.handleChange}
												 className="form-control cuisine-form"
												 placeholder="&#xf1b1; Japanese, American, e.g."/>
				        </div>
				        <div className="form-group">
									<input type="text"
												 name="CityStateZip"
												 onChange={this.handleChange}
												 className="form-control address-form"
												 placeholder="&#xf124; City, State or Zip Code"/>
				        </div>
								<button type="button" onClick={() => this.formSubmit()} className="search-btn btn btn-default">&#xf002; Submit</button>
				  </form>
				</div>
				<div className="overlayOpacity"></div>
				<img className="headerImg" src ="links/food6.jpg"/>
			</div>
		);
	}
});

module.exports = CustomerFilterHeader;
