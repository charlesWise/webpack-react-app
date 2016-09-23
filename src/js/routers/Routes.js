/**
 * Created by chenrs on 2016/9/22.
 */
import React from 'react';
import { IndexRoute, Route, Link, IndexRedirect, Redirect } from 'react-router';

/* containers */
import Index from './../../view/pages/index/Index';
import Payment from './../../view/pages/account/Payment';


import App from './App';
import About from './About';
import Repos from './Repos';
import Repo from './Repo';
import Home from './Home';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route>
        <Route path="/about" component={About}/>
        <Route path="/App" component={About}/>
        <Route path="/payment" component={Payment}/>
        <Route path="/index" component={Index}/>
    </Route>
);

export default routes;