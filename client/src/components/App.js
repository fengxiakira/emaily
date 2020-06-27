// React Router, rendering layer control
// es2015 modules
// backend use normal modules

import React from 'react';
// nevigate react-router-dom
// BrowserRouter: tell react how to behave when URL changes
// <Route /> is used to declaratively map routes to your application's component hierarchy.
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
const Dashboard = () => <h2>Dashboard</h2>
const Landing = () => <h2>Landing</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

// create functional component
// BrowserRoute:
//   a collection of different routes, at most one child
//   inside div, set Route, "/" : root route of application then component appear on the screen
const App = () => {
    return (
        // css
        <div>
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


};

// expore component
export default App;