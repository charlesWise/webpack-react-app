/**
 * Created by chenrs on 2016/8/10.
 */
'use strict';

// Import font-awesome-webpack file
import 'font-awesome-webpack';

// Import global.scss file
import './sass/global';

// Import React and JS
import React from 'react';
import ReactDOM from 'react-dom';

// Import Index
import Index from './components/pages/Index/Index';

// ReactDOM.render
ReactDOM.render(<Index />, document.getElementById('app'));