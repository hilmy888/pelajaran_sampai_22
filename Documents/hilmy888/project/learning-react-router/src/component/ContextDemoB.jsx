import React from 'react'
import {LoginContext} from '../App'

function ContextDemoB(){
    return (
        <LoginContext.Consumer>
            {([login, setLogin]) => (<div>B{login ? 'login' : 'logout'}</div>)}
        </LoginContext.Consumer>
    )
}


export default ContextDemoB