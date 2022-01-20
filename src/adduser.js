import React,{useState} from 'react';
import logo from './signup.PNG'
import {useMutation} from '@apollo/client'
import {CREATE_USER} from "./mutations"


function Adduser() {
    const[details,setDetails]=useState({ 
        email:'',
        Username:'',
        Password:''
    })

    const [createUser,{error}]= useMutation(CREATE_USER)
    

    const inputHandler = (e)=>{
        setDetails({
            ...details,[e.target.name]:e.target.value
        })
    }
    const formSubmit=()=>{
        console.log(details)
        createUser({
            variables: details
        })
    }
    
    return <div>
        <div className="regdiv">
            <div className='regimg'>
                <img src={logo}></img>
            </div>
            <div className='regdiv2'>
                <h1>ADD USERS DETAILS</h1>
                <input type="email" name='email' placeholder=" Email@account" onChange={inputHandler} value={details.email}/>
                <input type=" text" name='Username' placeholder="Username" onChange={inputHandler} value={details.Username}/>
                <input type="password" name='Password' placeholder=" Password" onChange={inputHandler} value={details.Password} />
                <button onClick={formSubmit}>SUBMIT</button><br></br>
            </div>
        </div>
    </div>;
}

export default Adduser;
