'use strict';
// Import CSS
import './sass/master.scss';

// Import React and JS
import React from 'react';
import ReactDOM from 'react-dom';

import HelloBox from './js/HelloBox';

// Render!
ReactDOM.render(<HelloBox />, document.getElementById('app'));