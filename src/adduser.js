import React,{useState} from 'react';
import logo from './signup.PNG'
import {useMutation} from '@apollo/client'
import {CREATE_USER} from "./mutations"

function Adduser() {
    const[inputField,setInputField]=useState({
        email:'',
        username:'',
        password:''
    })

    const [createUser,{error}]= useMutation(CREATE_USER)

    const inputHandler = (e)=>{
        setInputField({
            ...inputField,[e.target.name]:e.target.value
        })
    }
    const formSubmit=()=>{
        console.log(inputField)
        createUser({
            variables: inputField
        })
    }
    
    return <div>
        <div className="regdiv">
            <div className='regimg'>
                <img src={logo}></img>
            </div>
            <div className='regdiv2'>
                <h1>ADD USERS DETAILS</h1>
                <input type="email" name='email' placeholder=" Email@account" onChange={inputHandler} value={inputField.email}/>
                <input type=" text" name='username' placeholder="Username" onChange={inputHandler} value={inputField.username}/>
                <input type="password" name='password' placeholder=" Password" onChange={inputHandler} value={inputField.password} />
                <button onClick={formSubmit}>SUBMIT</button><br></br>
            </div>
        </div>
    </div>;
}

export default Adduser;
