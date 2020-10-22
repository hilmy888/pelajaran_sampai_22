import React from 'react'
import {useForm} from 'react-hook-form'
import {joiResolver} from '@hookform/resolvers/joi'
import Joi from 'joi'

const schema = Joi.object({
username: Joi.string().max(8).min(4),
age: Joi.string(),
password: Joi.string(),
gender:Joi.any
})
function HookFormDemo(){
    const{register, handleSubmit, errors} = useForm({
        resolver: joiResolver(schema)
    })

    function onSubmit(data){
        console.log(data)
    }
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        name <input type="text" name="username"ref={register} /><br/>
        <p>{errors && errors.username && errors.username.message}</p>
        age <input type="text" name="age" ref={register} /><br />
        password <input type="password" name="password" ref={register} /><br />
        <select name="gender" ref={register}>
            <option value="female">female</option>
            <option value="male">male</option>
        </select><br />        
        <button type="submit">Login</button>
    </form>)
}


export default HookFormDemo