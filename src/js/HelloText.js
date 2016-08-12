'use strict';
// Import React
import React from 'react';

// Create class called HelloText that extends the base React Component class
export default class HelloText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myName: 'chenrunsheng'
        };
    }

    render() {
        return <p>Hello, {this.props.name}! my is {this.state.myName}.</p>
    }
}