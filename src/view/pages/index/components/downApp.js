/**
 * Created by chenrs on 16/8/29.
 */
'use strict';
// Import React
import React from 'react';

// Create class called Index that extends the base React Component class
class DownApp extends React.Component {
    constructor(...props) {
        super(...props);
    }
    render() {
        return (
            <section className="downAppWrap">
                <div className="downApp">
                    <img src="src/images/head/downApp.png" alt=""/>
                </div>
            </section>
        )
    }
}
export default DownApp;