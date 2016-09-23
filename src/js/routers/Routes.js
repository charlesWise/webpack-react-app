/**
 * Created by chenrs on 2016/9/22.
 */
import React from 'react';
import { IndexRoute, Route, Link, IndexRedirect, Redirect } from 'react-router';

/* containers */
import Index from './../../view/pages/index/Index';
import Payment from './../../view/pages/account/Payment';


const routes = (
    <Route path="/" component={Index}>
        <IndexRoute component={Payment}/>
        <Route path="/Payment" component={Payment}/>

        {/*<Route path="/repos" component={Repos}>*/}
            {/*<Route path="/repos/:userName/:repoName" component={Repo}/>*/}
        {/*</Route>*/}
        {/*<Route path="/about" component={About}/>*/}

    </Route>
);

export default routes;