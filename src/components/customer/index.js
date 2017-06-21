// REACT MODULES ==================================
import React from 'react';

const Customer = React.createClass({
  getInitialState: function() {
    return {};
  },

  render: function() {

    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

export default Customer;
