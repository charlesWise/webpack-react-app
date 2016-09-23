/**
 * Created by chenrs on 2016/9/22.
 */
import React from 'react';
import { IndexRoute, Route, IndexRedirect, Redirect } from 'react-router';

/* containers */
import Index from '../../view/Index';
import Home from './../../view/pages/home/Home';
import Payment from './../../view/pages/account/Payment';

import About from './About';
import Repos from './Repos';
import Repo from './Repo';

const routes = (
    <Route path="/" component={Index}>
        <IndexRoute component={Home}/>
        <Route path="/repos" component={Repos}>
            <Route path="/repos/:userName/:repoName" component={Repo}/>
        </Route>
        <Route path="/about" component={About}/>
        <Route path="/App" component={About}/>
        <Route path="/payment" component={Payment}/>
    </Route>
);

export default routes;