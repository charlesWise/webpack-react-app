/**
 * Created by chenrs on 16/8/29.
 */
'use strict';
// Import React
import React from 'react';

// Create class called Index that extends the base React Component class
class SubHeader extends React.Component {
    constructor(...props) {
        super(...props);
    }

    render() {
        return (
            <section className="subHeader">
                <div className="title">首页</div>
            </section>
        )
    }
}
export default SubHeader;