import React from 'react'
import {Switch, Route, useRouteMatch} from 'react-router-dom'


function NestedComponent(){
    const {path} = useRouteMatch()
    console.log(path)
    return (
        <Switch>
            <Route exact path={path}>Index</Route>
            <Route exact path={`${path}/nested2`}>
                Nested 2
            </Route>
        </Switch>
    )
}

export default NestedComponent