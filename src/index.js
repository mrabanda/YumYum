// import injectTapEventPlugin from 'react-tap-event-plugin';
 
// // Needed for onTouchTap 
// // http://stackoverflow.com/a/34015469/988941 
// injectTapEventPlugin();

import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './Router';

ReactDOM.render(Routes, document.getElementById('app-target'));
