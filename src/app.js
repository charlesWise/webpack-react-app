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
// import Index from './view/pages/index/Index';
import PaymentSuccess from './view/pages/account/Payment';

// ReactDOM.render
ReactDOM.render(<PaymentSuccess />, document.getElementById('app'));