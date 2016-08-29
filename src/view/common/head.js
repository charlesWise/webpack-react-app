/**
 * Created by chenrs on 2016/8/12.
 */
'use strict';
// Import React
import React from 'react';

// Create class called Head that extends the base React Component class

class Head extends React.Component {
    constructor(...props) {
        super(...props);
        this.state = {};
    }

    render() {
        return (
            <section className="headerWrap">
                <div className="header">
                    <div className="logo"><img src="src/images/head/logo.png" alt=""/></div>
                    <div className="pullDownMore"><i className="fa fa-list"></i></div>
                </div>
            </section>
        )
    }
}
export default Head;