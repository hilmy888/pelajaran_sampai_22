import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import ContextButton from './ContextButton'


const linkArray = [
    ['/', 'Home'],
    ['/About','About'],
    ['/demo-a', 'DemoA'],
    ['/demo-b', 'DemoB'],
    ['/form-input', 'FormInput'],
    ['/form-validation', 'FormValidation'],
    ['/hook-validation', 'HookFormDemo']
]
const styling = {
    width: '150px',
    position: 'fixed',
    right: '10px',
    bottom: '10px'
}

function NavigationHelper(){
    const[isShow, setIsShow] = useState(false)
    function toggleHelper(){
        setIsShow(!isShow)
    }
    return(
        <div style={styling}>
            <div className="list-grup">
                <ContextButton />
                {/* <link to="/">Home</link>
                <link to="/About">About</link> */}
                {isShow && linkArray.map(([to, text], index)=>(<Link key={`${index + 1}`} to={to} className="list-group-item">{text}</Link>))}
                <button onClick={toggleHelper} className="list-group-item">Helper</button>
            </div>
        </div>
    )
}
export default NavigationHelper
