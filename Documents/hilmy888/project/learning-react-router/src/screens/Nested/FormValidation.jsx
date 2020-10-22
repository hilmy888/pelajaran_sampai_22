import React, {useState} from 'react'
import Joi from 'joi'

const schema = Joi.object({
    // username: joi.string().email({tlds: {allow: false}})
    username: Joi.string().max(8).min(4)
})
function FormValidation(){
    const [username, setusername] = useState('')
    const [error, setError] = useState(false)
    
    function HandleChange(e){
    setusername(e.target.value)
    }

    function validate(){
        const res = schema.validate({
            username: username
        })
        if(res.error){
            setError(res.error.masage)
        }else {
            setError(false)
        }
    }
    return (
        <input type="text" onChange={HandleChange} onBlur={validate}>
            {
                error || ''
            }
        </input>
    )
}
export default FormValidation