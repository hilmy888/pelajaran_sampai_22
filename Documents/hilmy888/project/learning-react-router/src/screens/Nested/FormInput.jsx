import React, {useState} from 'react'

function CheckboxDemo(){
const [isChecked, setIsChecked] = useState(false)
    function handleOnChange(e){
    setIsChecked(!isChecked)
    }
    return (
    <div>
    <input checked={isChecked} type="checkbox" onChange={handleOnChange} />
    <label>masuk pagi </label>
    </div>
    )
}

function RadioDemo(){
const [gender, setGender] = useState('Perempuan')
function handleOnChange(e){
    setGender(e.target.value)
}

    return(
        <div>
            <input checked={gender === 'Perempuan'} type="radio" name="gender" value="Perempuan" onChange={handleOnChange} /><label>Perempuan</label>
            {'|'}
            <input checked={gender === 'Laki'} type="radio" name="gender" value="Laki" onChange={handleOnChange} /><label>Laki</label>
            {'|'}
            {gender}
        </div>
    )
}

function SelectDemo(){
    const selectOptions = [
        ['0', 'Biologi'],
        ['1', 'Kimia'],
        ['2', 'Matematika']
    ]
    const[selected, setSelected] = useState('')
    function handleOnChange(e){
        setSelected(e.value.target)
    }
    
    return (
    <div>
        <select onChange={handleOnChange} value={selected}>
        {/* <option selected={selected === 'biologi'}>biologi</option>
        <option selected={selected === 'kimia'}>kimia</option>
        <option selected={selected === 'matematika'}>matematika</option>
        </select> */}
        {/* {selected} */}
        {
            selectOptions.map(([value, title])=> (<option value={value}>{title}</option>))
        }
        {selectOptions.find(([value])=> (value === selected))}
        </select>
        {
            selectOptions.reduce(
                (prev,[value,title]) => (value === selected ? title : prev),
                ''
            )
        }
    </div>)
}
function SelectMultipleDemo(){
    const[selected, setSelected] = useState([])
    function handleOnChange(e){
        console.log('on change')
        const prev = selected
        const val = e.target.value
        if (val === 'kosongkan'){
            selected([])
        }else{
            const newVal = prev.includes(val) ? prev.filter(val => val !== prev) : prev.concat([val])
            setSelected(newVal)
        }
    }
    return (
    <div>
        <select multiple onChange={handleOnChange}>
            <option>biologi</option>
            <option>kimia</option>
            <option>matematika</option>
            {selected}
        </select>
        {JSON.stringify(selected)}
    </div>)
}

function TextArea(){
    const [content, setContent] = useState(`nama status`)
    function handleOnChange(e){
        setContent(e.target.value)
    }
    return(
        <div>
            <textarea onChange={handleOnChange}>
                {content}
            </textarea>
        </div>
    )
}
function FormInput(){
    return(
    <div>
        <CheckboxDemo />
        <RadioDemo />
        <SelectDemo />
        <SelectMultipleDemo />
        <TextArea  />
    </div>)
}


export default FormInput