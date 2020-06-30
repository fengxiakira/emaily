// React Router, rendering layer control
// es2015 modules
// backend use normal modules

import React, { Component } from 'react';
// nevigate react-router-dom
// BrowserRouter: tell react how to behave when URL changes
// <Route /> is used to declaratively map routes to your application's component hierarchy.
import { BrowserRouter, Route } from 'react-router-dom'
// import different actions , connect give components ability
// to call action creaters
import { connect } from 'react-redux'
// take all actions we defined, and assign them to object actions.
import * as actions from '../actions'
// Landing component
import Landing from './Landing'

import Header from './Header'
const Dashboard = () => <h2>Dashboard</h2>

const SurveyNew = () => <h2>SurveyNew</h2>

// create functional component
// BrowserRoute:
//   a collection of different routes, at most one child
//   inside div, set Route, "/" : root route of application then component appear on the screen
// App component to be class-based. So it can call action creater
class App extends Component {
    // call action creator
    // fetch current user
    // componentDidMount() 会在组件挂载后（插入 DOM 树中）立即调用。
    // 依赖于 DOM 节点的初始化应该放在这里。
    // all action assign to App props
    componentDidMount() {
        this.props.fetchUser();

    }


    render() {
        return (
            // css
            // container : add space, top level
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }

};





// expore component
// first: map state second:all the action creaters
// actions assigned to App component as props
export default connect(null, actions)(App);