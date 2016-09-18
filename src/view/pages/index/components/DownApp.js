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
                <div className="closeBtn"><a href="javascript:;"><i className="fa fa-times-circle"></i></a></div>
                <div className="downAppBtn"><a href="javascript:;">下载APP</a></div>
            </section>
        )
    }
}
export default DownApp;