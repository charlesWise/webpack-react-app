/**
 * Created by chenrs on 16/8/29.
 */
'use strict';
// Import React
import React from 'react';

// Create class called Index that extends the base React Component class
class Lists extends React.Component {
    constructor(...props) {
        super(...props);
    }

    render() {
        return (
            <section className="listsWrap">
                <aside className="hotTitle">
                    <div className="line"></div>
                    <h3>热标推荐</h3>
                </aside>
                <ul>
                    <li></li>
                </ul>
            </section>
        )
    }
}
export default Lists;