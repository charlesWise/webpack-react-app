/**
 * Created by chenrs on 16/8/29.
 */
'use strict';
// Import React
import React from 'react';

// Create class called Lists that extends the base React Component class
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
                <section className="investContent">
                    <ul className="investItem">
                        <li>
                            <dl>
                                <dt>
                                    日益升日益升日益升日益升
                                </dt>
                                <dd></dd>
                            </dl>
                        </li>
                    </ul>
                </section>
            </section>
        )
    }
}
export default Lists;