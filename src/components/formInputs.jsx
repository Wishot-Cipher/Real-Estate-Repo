import React,{useState} from 'react'

export const FormInputs = (props) => {
  const [focused, setfocused] = useState(false)
   const {onChange, id,setvisible,visibility, errorMessage,...inputProps} = props

   const handleFocus = () =>{
    setfocused(true);
   }
   const handleVisible = () => {
    setvisible(!visibility)
   }
  return (
    <div className='field'>
      <div> 
        <input  {...inputProps} onChange={onChange} 
              onBlur={handleFocus}
              // onFocus={()=>inputProps.name ==='confirmpassword' && setfocused(true)}
              focused={focused.toString()}className='inputs' /> <br /> 
              
              {inputProps.name ==="password"  && <label onClick={handleVisible} className='visibility'>{visibility ? "Hide" : "Show"}</label>} 

              {inputProps.name === "confirmpassword" && <label onClick={handleVisible} className='visibility'>{visibility ? "Hide" : "Show"}</label>} 
                  <span> {errorMessage}</span>
          </div>
    </div>
  )
}