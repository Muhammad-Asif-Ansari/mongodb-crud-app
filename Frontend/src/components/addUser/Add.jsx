import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios";
import "./Add.css"
import toast from 'react-hot-toast';
const Add = () => {
  const users ={
    fname:"",
    lname:"",
    email:"",
    password:""
  }
  
  const [user,setUser] = useState(users);
  const navigate = useNavigate();
    const inputHandler = (e)=>{
      const {name,value}=e.target;
      setUser({...user, [name]:value})
      // console.log(user)
    }
    const submitForm = async(e)=>{
      e.preventDefault()
      await axios.post("http://localhost:5000/api/create",user)
      .then(response => toast.success(response.data.msg,{position:"top-right"}))
      .catch(err => console.log(err))
    }
  return (
    <div className='addUser'>
        <Link to={"/"}>Back</Link>
        <h3>Add New User</h3>
        <form className='addUserForm' onSubmit={submitForm}> 
        <div className="inputGroup">
            <label htmlFor="fname">
            First Name
            </label>
            <input type="text" id='fname' name='fname' autoComplete='off'onChange={inputHandler} placeholder='First Name'/>
        </div>

           <div className="inputGroup">
            <label htmlFor="lname">
            Last Name
            </label>
            <input type="text" id='lname' name='lname' autoComplete='off'onChange={inputHandler} placeholder='Last Name'/>
        </div>

           <div className="inputGroup">
            <label htmlFor="email">
            Email
            </label>
            <input type="email" id='email' name='email' autoComplete='off'onChange={inputHandler} placeholder='Email'/>
        </div>

           <div className="inputGroup">
            <label htmlFor="password">
            Password
            </label>
            <input type="password" id='password' name='password'onChange={inputHandler} autoComplete='off' placeholder='Password'/>
        </div>
           <div className="inputGroup">
       <button type='submit'>
        ADD USER
       </button>
        </div>
        </form>
    </div>
  )
}

export default Add
