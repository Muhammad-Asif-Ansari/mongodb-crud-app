import React from 'react'
import { Link } from 'react-router-dom'
import "./Add.css"
const Add = () => {
  return (
    <div className='addUser'>
        <Link to={"/"}>Back</Link>
        <h3>Add New User</h3>
        <form className='addUserForm'> 
        <div className="inputGroup">
            <label htmlFor="fnmae">
            First Name
            </label>
            <input type="text" id='fname' name='fname' autoComplete='off' placeholder='First Name'/>
        </div>

           <div className="inputGroup">
            <label htmlFor="lnmae">
            Last Name
            </label>
            <input type="text" id='lname' name='lname' autoComplete='off' placeholder='Last Name'/>
        </div>

           <div className="inputGroup">
            <label htmlFor="email">
            Email
            </label>
            <input type="email" id='email' name='email' autoComplete='off' placeholder='Email'/>
        </div>

           <div className="inputGroup">
            <label htmlFor="password">
            Password
            </label>
            <input type="password" id='password' name='password' autoComplete='off' placeholder='Password'/>
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
