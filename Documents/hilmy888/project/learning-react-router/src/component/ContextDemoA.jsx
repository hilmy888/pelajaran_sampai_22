import React from 'react'
import {LoginContext} from '../App'

function ContextDemoA(props){
    return (
        <LoginContext.Consumer>
            {([login, setLogin]) => (<div>A{login ? 'login' : 'logout'}</div>)}
        </LoginContext.Consumer>
    )
}

export default ContextDemoA