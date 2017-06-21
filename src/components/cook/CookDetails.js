// REACT MODULES ==================================
import React from 'react';

import CookHeader from './CookHeader';
import CookItem   from './CookItem';
// import SideBar from '../common/SideBar');

const CookDetails = React.createClass({
  getInitialState: function() {
    return {};
  },

  componentWillMount: function() {
    // Call DB to get items
    // this.setState({items: results of db call })
  },

  render: function() {

    const items = this.state.items;

    const menuitems = items.map((item) => {
      return <Cookitem key={item.id} name={item.name} />;
    });

    return (
      <div>
        {/* <SideBar /> */}
         <div className="container copy-style">
          <div className="row">
            <div className="orders-body">
              <div className="orders text-center center-block row-margin-sm">Current menu</div>

                   { menuitems }

            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default CookDetails;
