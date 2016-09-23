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
import { render } from 'react-dom';
import { Router, hashHistory  } from 'react-router'

import routes from './js/routers/Routes'

// Import Index
import Index from './view/pages/index/Index';

// render
render(
    <Router routes={routes} history={hashHistory}/>,
    document.getElementById('app'));