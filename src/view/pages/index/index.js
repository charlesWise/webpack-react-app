/**
 * Created by chenrs on 2016/8/12.
 */
'use strict';
// Import React
import React from 'react';
import Head from '../../common/head';
import DownApp from './components/downApp';

// Create class called Index that extends the base React Component class
class Index extends React.Component {
    constructor(...props) {
        super(...props);
    }
    render() {
        return (
            <section>
                <Head />
                <DownApp />
            </section>
        )
    }
}
export default Index;