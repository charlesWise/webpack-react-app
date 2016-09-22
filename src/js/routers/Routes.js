/**
 * Created by chenrs on 2016/9/22.
 */
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Index from './../../view/pages/index/Index'

import App from './App'
import About from './About'
import Repos from './Repos'
import Repo from './Repo'
import Home from './Home'

module.exports = (
    <Route path="/" component={Index}>
        <IndexRoute component={Home}/>
        <Route path="/repos" component={Repos}>
            <Route path="/repos/:userName/:repoName" component={Repo}/>
        </Route>
        <Route path="/about" component={About}/>
        <Route path="/App" component={About}/>
    </Route>
)