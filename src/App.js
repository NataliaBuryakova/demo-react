import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Layout from './hoc/Layout/Layout'
import Home from './containers/Home/Home'
import News from './containers/News/News'
import LoginForm from './containers/Auth/LoginForm'
import Profile from './containers/Profile/Profile'
import NotFound from './NotFound'
import PrivateRoute from './hoc/PrivateRoute'

class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={LoginForm} />
                    <Route path="/news" component={News} />
                    <PrivateRoute path="/profile" component={Profile} />
                    <Route  component={NotFound} />
                </Switch>

            </Layout>
        );
    }
}

export default App;
