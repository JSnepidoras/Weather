import React,{useState} from 'react'

export default function Form(props){
const [value, setValue] = useState('')
const getValueByInput = (event)=>{
    event.preventDefault()
    props.search(value)
}
    return(
        <div>
            <form onSubmit={getValueByInput} action="">
            <input type="text" value={value} onChange={event=>setValue(event.target.value)} />
            </form>
        </div>
    )
}

