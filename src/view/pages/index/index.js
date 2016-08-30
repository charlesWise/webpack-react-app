/**
 * Created by chenrs on 2016/8/12.
 */
'use strict';
// Import React
import React from 'react';
import Head from '../../common/head';
import SubHeader from '../../common/subHeader';
import DownApp from './components/downApp';
import Lists from './components/lists';

// Create class called Index that extends the base React Component class
class Index extends React.Component {
    constructor(...props) {
        super(...props);
    }

    render() {
        return (
            <section className="appWrap">
                <Head />
                <DownApp />
                <SubHeader />
                <Lists />
            </section>
        )
    }
}
export default Index;