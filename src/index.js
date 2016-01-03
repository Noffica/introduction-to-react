'use strict';

require('./css/bootstrap.min.css');

import React    from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

ReactDOM.render(
  <App 
    name={'Kenny Powers\'s todo list'}
  />
  ,
  document.getElementById('app')
)
