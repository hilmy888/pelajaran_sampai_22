import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import Home from '../screens/Home.jsx'
import About from '../screens/About.jsx'
import Dashboard from '../screens/Dashboard.jsx'
import Login from '../screens/Login.jsx'
import NavigationHelper from '../component/NavigationHelper.jsx'
import DemoA from '../component/ContextDemoA'
import DemoB from '../component/ContextDemoB'
import FormInput from '../screens/Nested/FormInput'
import FormValidation from '../screens/Nested/FormValidation'
import HookFormDemo from '../screens/Nested/HookFormDemo'

export default function Base (){
    return (
    <Router>
        <NavigationHelper />
        <Switch>    
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <Route path="/demo-a" component={DemoA} />
            <Route path="/demo-b" component={DemoB} />
            <Route path="/form-input" component={FormInput} />
            <Route path="/form-validation" component={FormValidation} />
            <Route path="/hook-validation" component={HookFormDemo} />
        </Switch>
    </Router>
    )
}