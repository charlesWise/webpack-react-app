/**
 * Created by chenrs on 2016/8/12.
 */
'use strict';
// Import React
import React from 'react';

// Create class called Head that extends the base React Component class
class Head extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myName: 'chenrunsheng'
        };
    }

    render() {
        return (
            <section className="header">
                <div><i className="icon_go_back"></i>
                    <span>{this.props.name}</span>
                </div>
            </section>
        )
    }
}
export default Head;