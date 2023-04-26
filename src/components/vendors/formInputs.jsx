import React,{useState} from 'react'

export const FormInputs = (props) => {
  const [focused, setfocused] = useState(false)
   const {onChange, id, errorMessage, ...inputProps} = props

   const handleFocus = () =>{
    setfocused(true);
   }
  return (
    <div className='field'>
        <input  {...inputProps} onChange={onChange} 
          onBlur={handleFocus}
          // onFocus={()=>inputProps.name ==='confirmpassword' && setfocused(true)}
          focused={focused.toString()} className='inputs' /> <br /> 
         <span> {errorMessage}</span>
    </div>
  )
}