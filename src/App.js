// REACT MODULES ==================================
import React from 'react';
// MATERIAL-UI THEME ==============================
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './stylesheets/App.css';


// Import components ==============================

import NavBar from './components/common/navbar';
import Footer from './components/common/footer';
//=================================================


const App = React.createClass({
  getInitialState: function() {
    return {};
  },


  render: function() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          {this.props.children}
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
});

export default App;
