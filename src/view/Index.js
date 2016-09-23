/**
 * Created by chenrs on 2016/9/23.
 */
'use strict';
// Import React
import React from 'react';

// Create class called Index that extends the base React Component class
class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
export default Index;