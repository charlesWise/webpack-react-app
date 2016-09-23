/**
 * Created by chenrs on 2016/8/12.
 */
'use strict';
// Import React
import React from 'react';
import Head from '../../common/Head';
import SubHeader from '../../common/SubHeader';
import DownApp from './components/DownApp';
import Lists from './components/Lists';

// Create class called Home that extends the base React Component class
class Home extends React.Component {
    constructor(props) {
        super(props);
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
export default Home;