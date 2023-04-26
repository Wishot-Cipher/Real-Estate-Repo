import React from 'react'
import { useState } from 'react'
import { FormInputs } from '../vendors/formInputs';

export const Login = () => {
   const [formValues, setFormValues] = useState({
    username : "",
    email : "",
    password : "",
    confirmpassword : "",
   });

   const inputs  = [
    {
    id:1, 
    type: "text",
    name: "username",
    placeholder: "Username",
    errorMessage :"Username must be 3-16 characters and shoudn't include special characters or numbers!",
    pattern: "^[A-Za-z ]{3,50}$",
    required : true
   },
   {
    id:2, 
    type: "email",
    name:"email",
    placeholder: "Email",
    errorMessage :"Not a valid email. Please input a valid email!",
    required : true
   },
   {
    id:3, 
    type: "password",
    name:"password",
    placeholder: "Password",
    errorMessage :"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    pattern : "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&* ]{8,20}$",
    required : true
   },
   {
    id:4, 
    type: "password",
    name: "confirmpassword",
    placeholder: "Confirm Password",
    errorMessage :"Password don't match!",
    pattern : formValues.password,
    required : true
   },
       ];

   const onchange = (e) =>{
    setFormValues({...formValues, [e.target.name] : e.target.value });
   }

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues)
    
    setFormValues({
      username : "",
    email : "",
    password : "",
    confirmpassword : "",
    })

   }

  return (
    < div  className='formContainer' >
      <form onSubmit={handleSubmit} className="registerForm">
        <h1> Register</h1>
          {inputs.map((input) => (
            <FormInputs 
            key={input.id} 
            {...input} 
            value={formValues[input.name]} 
            onChange={onchange}
            errorMessage= {input.errorMessage}/>
          ))}  
          <input type="submit" value="Register"  className='regButton'/>
      </form>  
    </div>
  )
}
