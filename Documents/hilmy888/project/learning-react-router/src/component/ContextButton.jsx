import React from 'react'
import {LoginContext} from '../App'

function ContextButton(){
    return (
        <LoginContext.Consumer>
            {([login, setlogin])=>(
            <button
                className="btn btn-primary"
                onClick= {() => setlogin(!login)}
            >
                klik
            </button>
            )}
        </LoginContext.Consumer>
    )
}

export default ContextButton