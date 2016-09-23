/**
 * Created by chenrs on 16/8/29.
 */
'use strict';
// Import React
import React from 'react';
import { Link } from 'react-router'

// Create class called Lists that extends the base React Component class
class Lists extends React.Component {
    constructor(props) {
        super(props);
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
                                    <Link to="/payment">Payment</Link>
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